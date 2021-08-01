import { gatewayHelper } from "../utility/index";

export const orderService = { postOrder, getOrderById, editOrderById };

async function postOrder(token, body) {
  const response = await gatewayHelper.http(
    "POST_AUTH",
    "order-histories",
    token,
    body
  );
  return response;
}

async function getOrderById(orderId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "order-histories/" + orderId,
    token,
    body
  );
  return response;
}

async function editOrderById(orderId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "order-histories/" + orderId,
    token,
    body
  );
  return response;
}
