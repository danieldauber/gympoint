import Plan from '../models/Plan';

class PlansController {
  async index(req, res) {
    const plans = await Plan.findAll();

    return res.json(plans);
  }

  async store(req, res) {
    const { title, duration, price } = await Plan.create(req.body);

    return res.json({
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const planId = req.params.id;

    const plan = await Plan.findByPk(planId);

    await plan.update(req.body);

    const { id, title, duration, price } = await Plan.findByPk(planId, {
      attributes: ['id', 'title', 'duration', 'price'],
    });

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const planId = req.params.id;

    const { id, title, duration, price } = await Plan.findByPk(planId, {
      attributes: ['id', 'title', 'duration', 'price'],
    });

    await Plan.destroy({
      where: {
        id: planId,
      },
    });

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }
}

export default new PlansController();
