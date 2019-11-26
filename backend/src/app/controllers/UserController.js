import User from '../models/User';
import File from '../models/File';

import Cache from '../../lib/Cache';

class UserController {
  async store(req, res) {
    const userExits = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExits) {
      return res.status(400).json({ error: 'User alredy exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    if (provider) {
      await Cache.invalidate('providers');
    }

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExits = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExits) {
        return res.status(400).json({ error: 'User alredy exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name } = await User.findByPk(req.userId, {
      attributes: ['id', 'name', 'email'],
    });

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
