/* eslint-disable camelcase */
/* eslint-disable no-var */
var DataTypes = require('sequelize').DataTypes;
var _mvd_products_loans = require('./mvd_products_loans');

function initModels(sequelize) {
  var mvd_products_loans = _mvd_products_loans(sequelize, DataTypes);

  return {
    mvd_products_loans,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
