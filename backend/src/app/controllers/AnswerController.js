import HelpOrder from '../models/HelpOrder';

class AnswerController {
  async index(req, res) {
    const { id } = req.params;

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id: id,
      },
    });

    return res.json(helpOrders);
  }
}

export default new AnswerController();
