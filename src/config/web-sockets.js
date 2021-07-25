import io from "socket.io-client";
let STRAPI_ENDPOINT = "https://bikinevent.id/api";

export const socket = io(STRAPI_ENDPOINT);
