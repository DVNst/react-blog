import About from "./components/about/about";
import Blog from "./components/blog/blog";
import EditPost from "./components/edit-post/edit-post";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";

function App() {
  return (
    <div className="main">
      <Menu />
      <div className="main__left">
        {/* <About /> */}
        <EditPost />
      </div>
      <div className="main__right">
        <Header />
        <Blog />
      </div>
    </div>
  );
}

export default App;
