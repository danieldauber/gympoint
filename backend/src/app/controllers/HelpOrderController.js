import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Queue from '../../lib/Queue';
import AnswerMail from '../jobs/AnswerMail';

class HelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: {
        answer_at: null,
      },
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const { id } = req.params;
    const { question } = req.body;

    const { student_id } = await HelpOrder.create({
      question,
      student_id: id,
    });

    return res.json({
      question,
      student_id,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { answer } = req.body;

    const helpOrder = await HelpOrder.findByPk(id);

    const { student_id, answer_at } = await helpOrder.update({
      answer,
      answer_at: new Date(),
    });

    const student = await Student.findByPk(student_id);

    await Queue.add(AnswerMail.key, {
      question: helpOrder.question,
      answer,
      student,
    });

    return res.json({
      answer,
      student_id,
      answer_at,
    });
  }
}

export default new HelpOrderController();
