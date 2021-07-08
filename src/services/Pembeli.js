import { gatewayHelper } from "../utility/index";

export const pembeliService = { getPembeliById, editPembeliById, postPembeli };

async function getPembeliById(pembeliId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "pembelis/" + pembeliId,
    token,
    body
  );
  return response;
}

async function editPembeliById(pembeliId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "pembelis/" + pembeliId,
    token,
    body
  );
  return response;
}

async function postPembeli(token, body) {
  const response = await gatewayHelper.http(
    "POST_AUTH",
    "pembelis",
    token,
    body
  );
  return response;
}
