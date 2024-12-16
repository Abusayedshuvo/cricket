import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <Players></Players>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
