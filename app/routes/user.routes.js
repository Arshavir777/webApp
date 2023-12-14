import express from 'express';
import UserController from '../controllers/user.controller';
const { body } = require('express-validator');

const router = express.Router();

// TODO: create schema and separate validator middleware later
router.patch('/:userId', body('balance').notEmpty().isFloat(), UserController.updateBalanceByUserId);

export default router;
