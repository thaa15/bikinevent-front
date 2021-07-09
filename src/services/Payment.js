import { gatewayHelper } from "../utility/index";

export const paymentService = { getPayment };

async function getPayment() {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "payment-method",
    null,
    body
  );
  return response;
}
