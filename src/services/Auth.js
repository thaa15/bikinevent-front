import { gatewayHelper } from "../utility/index";
export const authService = {
  login,
  register,
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
