import { subDays } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const { id } = req.params;
    const { page = 1 } = req.query;

    const checkin = await Checkin.findAll({
      where: {
        student_id: id,
      },
      limit: 10,
      order: [['id', 'DESC']],

      offset: (page - 1) * 10,
    });

    return res.json(checkin);
  }

  async store(req, res) {
    const { id } = req.params;

    /* check days */

    const { count } = await Checkin.findAndCountAll({
      where: {
        student_id: id,
        created_at: {
          [Op.gte]: subDays(new Date(), 7),
        },
      },
    });

    if (count >= 5) {
      return res.status(400).json({
        error:
          'Não foi possível fazer checkin. Máximo de 5 no período de 7 dias',
      });
    }

    const checkin = await Checkin.create({
      student_id: id,
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
