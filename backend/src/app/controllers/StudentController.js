import { Op } from 'sequelize';
import Student from '../models/Student';

import Cache from '../../lib/Cache';

class StudentController {
  async index(req, res) {
    const { page = 1, name } = req.query;
    let whereName = {};

    if (name) {
      whereName = {
        name: {
          [Op.like]: `%${name}%`,
        },
      };
    }

    const students = await Student.findAll({
      where: whereName,
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(students);
  }

  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student alredy exists' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    const studentId = req.params.id;

    const { email } = req.body;

    const student = await Student.findByPk(studentId);

    if (email && email !== student.email) {
      const studentExits = await Student.findOne({
        where: { email: req.body.email },
      });

      if (studentExits) {
        return res.status(400).json({ error: 'Student alredy exists' });
      }
    }

    await student.update(req.body);

    const { id, name } = await Student.findByPk(studentId, {
      attributes: ['id', 'name', 'email'],
    });

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new StudentController();
