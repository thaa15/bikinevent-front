import { gatewayHelper } from "../utility/index";

export const orderService = { postOrder };

async function postOrder(token, body) {
  const response = await gatewayHelper.http(
    "POST_AUTH",
    "order-histories",
    token,
    body
  );
  return response;
}
