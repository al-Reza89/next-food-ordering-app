import mongoose from "mongoose";

// this scheme for Order page

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      // for customer name
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 300,
    },
    total: {
      // for total price
      type: Number,
      required: true,
    },
    status: {
      // status is  number 1-4 no [prepared,cooking,shipping..]
      type: Number,
      default: 0,
    },
    method: {
      // for payment method
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
