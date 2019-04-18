const Sequelize = require('sequelize');

let sequelize;

sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

/**
 * @example
 * // Use this block to test if the connection is OK
 * sequelize
 *  .authenticate()
 *  .then(() => {
 *    console.log('Connection has been established successfully.');
 *  })
 *  .catch(err => {
 *    console.error('Unable to connect to the database:', err);
 *  });
 */
module.exports = sequelize;
