import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();

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
