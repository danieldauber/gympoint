import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { title, duration, end_date, price, student } = data;

    await Mail.sendmail({
      to: `${student.name} <${student.email}>`,
      subject: 'Detalhes da sua Matrícula',
      template: 'registration',
      context: {
        name: student.name,
        title,
        duration,
        date: format(parseISO(end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        price,
      },
    });
  }
}

export default new RegistrationMail();
