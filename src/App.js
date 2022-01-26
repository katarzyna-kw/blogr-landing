import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";
import "./App.css";

function App() {
  return (
    <main className="App" data-testid="app">
      <Header />
      <Body />
      <Footer />
      <Attribution />
    </main>
  );
}

export default App;
