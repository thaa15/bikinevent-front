import { gatewayHelper } from "../utility/index";

export const footerService = { getFooter };

async function getFooter() {
  const body = {};
  const response = await gatewayHelper.http("GET", "footer", null, body);
  return response;
}
