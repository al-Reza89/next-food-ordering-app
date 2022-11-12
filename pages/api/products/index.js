//  it works like express server

import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  // first we connect db
  dbConnect();

  // than we need model

  // it can be get ,post , delete ....

  const { method, cookies } = req;
  const token = cookies.token;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      //  req.body te ja dibo ta Product Scheme e save korbe
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
