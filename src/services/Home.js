import { gatewayHelper } from "../utility/index";

export const homeService = { getHome };

async function getHome() {
  const body = {};
  const response = await gatewayHelper.http("GET", "homepage", null, body);
  return response;
}
