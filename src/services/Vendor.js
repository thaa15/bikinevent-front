import { gatewayHelper } from "../utility/index";

export const vendorService = { getVendorById };

async function getVendorById(vendorId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "vendors/" + vendorId,
    null,
    body
  );
  return response;
}
