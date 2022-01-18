import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";

function App() {
  return (
    <div className="main">
      <Menu />
      <div className="main__left">
        <About />
      </div>
      <div className="main__right">
        <Header />
        <Blog />
      </div>
    </div>
  );
}

export default App;
