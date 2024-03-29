//  it works like express server

import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  // first we connect db
  dbConnect();

  // than we need model

  // it can be get ,post , delete ....
  // query hoilo je params ta send kortasi

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      //  req.body te ja dibo ta Product Scheme e save korbe

      const product = await Product.findByIdAndUpdate(id);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      //  req.body te ja dibo ta Product Scheme e save korbe

      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
