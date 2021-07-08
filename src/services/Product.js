import { gatewayHelper } from "../utility/index";

export const productService = {
  getAllProduct,
  getProductById,
  editProductById,
  deleteProductById,
};

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

async function editProductById(productId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "produks/" + productId,
    token,
    body
  );
  return response;
}

async function deleteProductById(productId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "DELETE",
    "produks/" + productId,
    token,
    body
  );
  return response;
}
