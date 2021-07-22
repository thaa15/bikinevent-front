import { gatewayHelper } from "../utility/index";

export const orderPenarikanService = {
  postOrderPenarikan,
  getOrderPenarikanById,
};

async function postOrderPenarikan(token, body) {
  const response = await gatewayHelper.http(
    "POST_AUTH",
    "order-penarikans",
    token,
    body
  );
  return response;
}

async function getOrderPenarikanById(orderId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "order-penarikans/" + orderId,
    token,
    body
  );
  return response;
}
