//  it works like express server

import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
  }
  if (method === "PUT") {
  }
  if (method === "DELETE") {
  }
}
