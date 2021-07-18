import { gatewayHelper } from "../utility/index";
export const authService = {
  login,
  register,
  getDetails,
  editUser,
};

async function login(body) {
  const response = await gatewayHelper.http("POST", "auth/local", null, body);
  return response;
}

async function register(body) {
  const response = await gatewayHelper.http(
    "POST",
    "auth/local/register",
    null,
    body
  );
  return response;
}

async function getDetails(token) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET_AUTH",
    "users/me",
    token,
    body
  );
  return response;
}

async function editUser(userId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "users/" + userId,
    token,
    body
  );
  return response;
}
