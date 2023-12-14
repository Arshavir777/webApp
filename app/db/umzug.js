import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from "./database";

const umzug = new Umzug({
    migrations: { glob: "migrations/*.js" },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

export default umzug;
