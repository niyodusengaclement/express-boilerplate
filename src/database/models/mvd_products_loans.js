/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mvd_products_loans',
    {
      product_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      group_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      min_loan_amount: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      max_loan_amount: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      loan_type: {
        type: DataTypes.ENUM('savings_tied', 'credit_scored', 'capped'),
        allowNull: false,
      },
      ratio_to_savings: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      interest_rate_per_period: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
      },
      interest_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      loan_repayt_delay_fine: {
        type: DataTypes.DECIMAL(19, 3),
        allowNull: false,
      },
      npl_classification_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cashout_fee_incl: {
        type: DataTypes.ENUM('Yes', 'No'),
        allowNull: false,
        defaultValue: 'No',
      },
      product_status: {
        type: DataTypes.ENUM('Active', 'Inactive', 'Suspended', 'Closed'),
        allowNull: false,
      },
      lastupdate_by: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lastupdate_on: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      interest_type: {
        type: DataTypes.ENUM('simple', 'compounding'),
        allowNull: false,
      },
      is_group_default: {
        type: DataTypes.ENUM('Yes', 'No'),
        allowNull: false,
        defaultValue: 'No',
      },
      max_loan_duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      request_source: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      request_source_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      update_to: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      is_fine_tied: {
        type: DataTypes.ENUM('Yes', 'No'),
        allowNull: false,
        defaultValue: 'No',
      },
      pwallet_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },
      ic_method: {
        type: DataTypes.ENUM(
          'FixedInterestFirst',
          'FixedInterestLast',
          'FixedInterestPerCycle',
          'ReducingBalance',
        ),
        allowNull: false,
        defaultValue: 'FixedInterestFirst',
      },
    },
    {
      sequelize,
      tableName: 'mvd_products_loans',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'product_id' }],
        },
      ],
    },
  );
};
