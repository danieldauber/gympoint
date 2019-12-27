import HelpOrder from '../models/HelpOrder';

class AnswerController {
  async index(req, res) {
    const { id } = req.params;
    const { page = 1 } = req.query;

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id: id,
      },
      limit: 10,
      offset: (page - 1) * 10,
      order: [['id', 'DESC']],
    });

    return res.json(helpOrders);
  }
}

export default new AnswerController();
