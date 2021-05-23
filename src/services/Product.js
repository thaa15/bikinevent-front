import { gatewayHelper } from "../utility/index";

export const productService = { getAllProduct, getProductById };

async function getAllProduct() {
  const body = {};
  const response = await gatewayHelper.http("GET", "produks", null, body);
  return response;
}

async function getProductById(productId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "produks/" + productId,
    null,
    body
  );
  return response;
}
