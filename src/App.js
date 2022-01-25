import About from "./components/about/about";
import Blog from "./components/blog/blog";
import EditPost from "./components/edit-post/edit-post";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import PostLoad from "./components/post-load/post-load";
import Post from "./components/post/post";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="main main--two-columns">
    {/* <div className="main"> */}
      <Menu />
      <div className="main__left">
        {/* <About /> */}
        {/* <EditPost /> */}
        <Post/>
        {/* <PostLoad /> */}
      </div>
      <div className="main__right">
        <Header />
        <Blog />
      </div>
      {/* <div className="main__right">
        <Header />
        <Profile />
      </div> */}
    </div>
  );
}

export default App;
