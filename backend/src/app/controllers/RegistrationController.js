import { addMonths, parseISO } from 'date-fns';
import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';

import RegistrationMail from '../jobs/RegistrationMail';

import Queue from '../../lib/Queue';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll();

    return res.json(registrations);
  }

  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const student = await Student.findByPk(student_id);

    const { title, duration, total, price } = await Plan.findByPk(plan_id);

    const { id, end_date } = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date: addMonths(parseISO(start_date), duration),
      price: total,
    });

    await Queue.add(RegistrationMail.key, {
      title,
      duration,
      end_date,
      price,
      student,
    });

    return res.json({
      id,
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
      total,
    });
  }

  async update(req, res) {
    const registrationId = req.params.id;

    const { student_id, plan_id, start_date } = req.body;

    const { duration, total } = await Plan.findByPk(plan_id);

    const registration = await Registration.findByPk(registrationId);

    await registration.update({
      student_id,
      plan_id,
      start_date,
      end_date: addMonths(parseISO(start_date), duration),
      price: total,
    });

    const { id, end_date, price } = await Registration.findByPk(registrationId);

    return res.json({
      id,
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const {
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    } = await Registration.findByPk(id);

    await Registration.destroy({
      where: {
        id,
      },
    });

    return res.json({
      id,
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });
  }
}

export default new RegistrationController();
