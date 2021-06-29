import { gatewayHelper } from "../utility/index";

export const portfolioService = {
  getPortfolioById,
  editPortfolioById,
  deletePortfolioById,
};

async function getPortfolioById(portfolioId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "portfolios/" + portfolioId,
    null,
    body
  );
  return response;
}

async function editPortfolioById(portfolioId, token, body) {
  const response = await gatewayHelper.http(
    "PUT_AUTH",
    "portfolios/" + portfolioId,
    token,
    body
  );
  return response;
}

async function deletePortfolioById(portfolioId, token) {
  const body = {};
  const response = await gatewayHelper.http(
    "DELETE",
    "portfolios/" + portfolioId,
    token,
    body
  );
  return response;
}
