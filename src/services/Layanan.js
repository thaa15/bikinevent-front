import { gatewayHelper } from "../utility/index";

export const layananService = { getLayanan };

async function getLayanan() {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "customer-service",
    null,
    body
  );
  return response;
}
