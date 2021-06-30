import React, { useEffect, useState } from "react";
import axios from "axios";
import { SettingsApplicationsOutlined } from "@material-ui/icons";
import Coin from "../components/Coin";
function Crypto() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50000&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ background: "white" }}>
      {coins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbols={coin.symbols}
            image={coin.image}
            markecaptrank={coin.market_cap_rank}
          ></Coin>
        );
      })}
    </div>
  );
}

export default Crypto;
