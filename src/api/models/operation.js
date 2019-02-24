const mongoose = require('mongoose');
Schema = mongoose.Schema;

/**
 * Operations Schema
 * @private
 */

const OperationsSchema = new mongoose.Schema(
  {
    question: { type: String },
    answer: {
      type: Number, default: null
    },
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model('Operations', OperationsSchema);
