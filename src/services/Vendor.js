import { gatewayHelper } from "../utility/index";

export const vendorService = { getVendorById, editVendorById, getAllVendor };

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

async function getAllVendor() {
  const body = {};
  const response = await gatewayHelper.http("GET", "vendors", null, body);
  return response;
}

async function editVendorById(vendorId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "vendors/" + vendorId,
    token,
    body
  );
  return response;
}
