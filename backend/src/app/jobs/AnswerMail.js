import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { question, answer, student } = data;

    await Mail.sendmail({
      to: `${student.name} <${student.email}>`,
      subject: 'Resposta da sua pergunta',
      template: 'answer',
      context: {
        name: student.name,
        question,
        answer,
      },
    });
  }
}

export default new AnswerMail();
