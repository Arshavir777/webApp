import cron from 'node-cron';
import { Job } from '../models';

const backgroundJobsCount = 1;

const CronService = {
    performBackgroundTasks: async () => {
        const pid = process.pid;
        console.log('>>> setup jobs');

        for (let i = 0; i < backgroundJobsCount; i++) {
            cron.schedule('*/5 * * * * *', async () => {
                // TODO: get one ready job by PROCESS ID, run, update the status ...
                // Set timeout 2min...
                console.log(">>> backgroundTask started", { pid });
                await sleep(5000);
                console.log(">>> backgroundTask finished", { pid });
            });
        }
    },
};

export default CronService;
