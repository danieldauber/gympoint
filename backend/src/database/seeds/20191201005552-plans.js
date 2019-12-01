module.exports = {
  up: QueryInterface => {
    const plans = [];

    plans.push({
      title: 'Start',
      duration: 1,
      price: 129,
      created_at: new Date(),
      updated_at: new Date(),
    });

    plans.push({
      title: 'Gold',
      duration: 3,
      price: 109,
      created_at: new Date(),
      updated_at: new Date(),
    });

    plans.push({
      title: 'Diamond',
      duration: 6,
      price: 89,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return QueryInterface.bulkInsert('plans', plans, {});
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete('plans', null, {});
  },
};
