import { gatewayHelper } from "../utility/index";

export const blogService = { getAllBlog, getBlogById };

async function getAllBlog() {
  const body = {};
  const response = await gatewayHelper.http("GET", "blogs", null, body);
  return response;
}

async function getBlogById(blogId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "blogs/" + blogId,
    null,
    body
  );
  return response;
}
