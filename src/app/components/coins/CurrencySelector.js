import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React from "react";

const CurrencySelector = ({ fetchDataFromCurrencySelector }) => {
  const currencies = [
    "usd",
    "aed",
    "ars",
    "aud",
    "bch",
    "bdt",
    "bhd",
    "bmd",
    "bnb",
    "brl",
    "btc",
    "cad",
    "chf",
    "clp",
    "dot",
    "eth",
    "eur",
    "gbp",
    "idr",
    "jpy",
    "ltc",
    "myr",
    "php",
    "rub",
    "thb",
    "xag",
    "xdr",
    "xrp",
    "zar",
  ];
  const options = currencies.map((currency) => {
    return (
      <option value={currency} key={currency}>
        {currency}
      </option>
    );
  });

  return (
    <Box>
      <Select
        onChange={(e) => {
          fetchDataFromCurrencySelector(e.target.value);
        }}
      >
        {options}
      </Select>
    </Box>
  );
};

export default CurrencySelector;
