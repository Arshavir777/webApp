import { validationResult } from 'express-validator';
import UserService from '../services/user.service';

const UserController = {
  updateBalanceByUserId: async (req, res, next) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).send({ status: 400, errors: result.array() });
      }
      const { userId } = req.params;
      const { balance } = req.body;

      const user = await UserService.updateBalanceByUserId(userId, +balance);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
};

export default UserController;
