import HelpOrder from '../models/HelpOrder';

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

    return res.json({
      answer,
      student_id,
      answer_at,
    });
  }
}

export default new HelpOrderController();
