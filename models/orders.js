const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  items: [],
});

module.exports = mongoose.model("Order", orderSchema);
