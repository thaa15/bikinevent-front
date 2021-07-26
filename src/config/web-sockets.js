import io from "socket.io-client";
let STRAPI_ENDPOINT = "https://bikinevent.id/";

export const socket = io(STRAPI_ENDPOINT, {
  path: "/api/socket.io",
});
