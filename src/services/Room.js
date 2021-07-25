import { gatewayHelper } from "../utility/index";

export const roomService = { getUserRoom, getVendorRoom };

async function getUserRoom(userId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "rooms/user/" + userId,
    token,
    body
  );
  return response;
}

async function getVendorRoom(vendorId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "rooms/vendor/" + vendorId,
    token,
    body
  );
  return response;
}
