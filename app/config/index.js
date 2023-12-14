import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || 'postgres://user:pass@example.com:5432/test',
    clusterMode: false,
    clustersCount: 2
}
