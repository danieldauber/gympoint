import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        total: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.price * this.duration;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default Plan;
