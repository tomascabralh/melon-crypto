import React from "react";

const CoinApi = () => {
  const ApiKey = "303c9b48-a96f-498b-855b-c81afbea44a2";

  request(
    "GET",
    `{https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${ApiKey}}`
  )
    .then(() => {})
    .catch();

  return <div></div>;
};

export default CoinApi;
