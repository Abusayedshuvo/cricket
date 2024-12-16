import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    setCoin(coin + 1);
  };
  return (
    <>
      <Header coin={coin}></Header>
      <main>
        <Banner handleCoin={handleCoin}></Banner>
        <Players></Players>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
