import axios from "axios";
export const gatewayHelper = {
  http,
};
const BASE_URL = "https://staging-bikinevent.herokuapp.com";

async function http(method, endpoint, token = null, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  let response = null;

  if ("POST" === method.toUpperCase()) {
    response = await axios.post(`${BASE_URL}/${endpoint}`, body, {
      headers: headers,
    });
  } else if ("GET" === method.toUpperCase()) {
    response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method: method.toUpperCase(),
      headers: headers,
      params: body,
    });
  } else if ("PUT" === method.toUpperCase()) {
    response = await axios.put(
      `${BASE_URL}/${endpoint}`,
      JSON.stringify(body),
      {
        headers: headers,
      }
    );
  }
  return response;
}
