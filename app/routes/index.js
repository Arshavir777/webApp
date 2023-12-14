import express from 'express';
import userRoutes from './user.routes';

const router = express.Router();

router.get('', (req, res) => {
    res.json('App Running')
});

router.use('/users', userRoutes)

export default router;
