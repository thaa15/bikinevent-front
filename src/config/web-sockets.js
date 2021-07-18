import io from "socket.io-client";
let STRAPI_ENDPOINT = "http://localhost:1337";

export const socket = io(STRAPI_ENDPOINT);
