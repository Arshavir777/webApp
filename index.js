import express from "express";
import cluster from "node:cluster";
import os from "node:os";
import routes from "./app/routes";
import { sequelize } from "./app/db/database";
import { appConfig } from "./app/config";
import umzug from "./app/db/umzug";
import { defaultErrorHandler } from "./app/helpers";
import CronService from "./app/services/cron.service";

async function main() {
    const app = express();

    if (appConfig.clusterMode && cluster.isPrimary) {
        // Fork workers
        for (let i = 0; i < appConfig.clustersCount; i++) {
            cluster.fork();
        }
        return;
    }

    try {
        await sequelize.authenticate();
        console.log("DB connection has been established successfully.");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
        return;
    }

    console.log('Run pending migrations');
    await umzug.down()
    await umzug.up()

    app.use(express.json());

    // Use routes
    app.use("/", routes);
    app.use(defaultErrorHandler)

    // Start cron jobs
    CronService.performBackgroundTasks();

    // Start the server
    const server = app.listen(appConfig.port, () => {
        console.log(`Server is running on http://localhost:${appConfig.port}`);
    });

    async function shutDown() {
        console.log('Received kill signal, shutting down gracefully');
        server.close(() => {
            console.log('Closed out remaining connections');
            process.exit(0);
        });
        await sequelize.close()
    }

    process.on('SIGTERM', shutDown);
    process.on('SIGINT', shutDown);
}

main().catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
});