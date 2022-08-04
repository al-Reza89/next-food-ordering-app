import mongoose from "mongoose";

// this scheme for Product page

const ProductSchema = new mongoose.Schema(
  {
    title: {
      // for pizza title
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 300,
    },
    img: {
      // for pizza image
      type: String,
      required: true,
    },
    prices: {
      // price is array of number
      type: [Number],
      required: true,
    },
    extraOptions: {
      // array of object for choose additional ingredients
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
