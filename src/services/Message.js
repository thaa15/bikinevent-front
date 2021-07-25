import { gatewayHelper } from "../utility/index";

export const messageService = { postNewChat };

async function postNewChat(token, body) {
  const response = await gatewayHelper.http(
    "POST_AUTH",
    "messages",
    token,
    body
  );
  return response;
}
