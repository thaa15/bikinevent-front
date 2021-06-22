import axios from "axios";
export const gatewayHelper = {
  http,
};
const BASE_URL = "http://localhost:1337";

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
  } else if ("POST_AUTH" === method.toUpperCase()) {
    response = await axios.post(`${BASE_URL}/${endpoint}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } else if ("GET_AUTH" === method.toUpperCase()) {
    response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } else if ("PUT_AUTH" === method.toUpperCase()) {
    response = await axios.put(`${BASE_URL}/${endpoint}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return response;
}
