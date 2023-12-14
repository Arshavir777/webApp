import { AppError } from '../helpers/error';
import User from '../models/user.model';

const UserService = {
  updateBalanceByUserId: async (userId, balance) => {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new AppError('User Not Found', 404);
    }

    if (user.balance + balance < 0) {
      throw new AppError('Insufficient funds', 422);
    }

    // TODO: instead of using transaction we can use some redis based solution for lock

    return balance < 0
      ? user.decrement({ balance: Math.abs(balance) })
      : user.increment({ balance: Math.abs(balance) })
  },
};

export default UserService;
