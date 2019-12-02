module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('checkins', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('checkins', 'id');
  },
};
