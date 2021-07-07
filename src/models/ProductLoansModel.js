import { sequelize } from 'config/db.connection';
import Sequelize from 'sequelize';

const ProductLoansModel = sequelize.define(
  'mvd_products_loans',
  {
    product_id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    group_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    product_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    min_loan_amount: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    max_loan_amount: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    loan_type: {
      type: Sequelize.ENUM('savings_tied', 'credit_scored', 'capped'),
      allowNull: false,
    },
    ratio_to_savings: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    interest_rate_per_period: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    interest_period: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    loan_repayt_delay_fine: {
      type: Sequelize.DECIMAL(19, 3),
      allowNull: false,
    },
    npl_classification_days: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cashout_fee_incl: {
      type: Sequelize.ENUM('Yes', 'No'),
      allowNull: false,
      defaultValue: 'No',
    },
    product_status: {
      type: Sequelize.ENUM('Active', 'Inactive', 'Suspended', 'Closed'),
      allowNull: false,
    },
    lastupdate_by: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    lastupdate_on: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    interest_type: {
      type: Sequelize.ENUM('simple', 'compounding'),
      allowNull: false,
    },
    is_group_default: {
      type: Sequelize.ENUM('Yes', 'No'),
      allowNull: false,
      defaultValue: 'No',
    },
    max_loan_duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    request_source: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    request_source_id: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    update_to: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    is_fine_tied: {
      type: Sequelize.ENUM('Yes', 'No'),
      allowNull: false,
      defaultValue: 'No',
    },
    pwallet_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: 1,
    },
    ic_method: {
      type: Sequelize.ENUM(
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

export default ProductLoansModel;
