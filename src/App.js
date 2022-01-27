import { useState } from "react";

import About from "./components/about/about";
import Blog from "./components/blog/blog";
import EditPost from "./components/edit-post/edit-post";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Modal from "./components/modal/modal";
import PostLoad from "./components/post-load/post-load";
import Post from "./components/post/post";
import Profile from "./components/profile/profile";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickMenuOpen = () => {
    setIsOpenMenu((prev) => !prev);
  }

  return (
    <div className={`main main--two-columns${isOpenMenu ? ' main--open-menu' : ''}`}>
      {/* <div className="main"> */}
      <Menu
        isOpenMenu={isOpenMenu}
        onClickMenu={onClickMenuOpen}
      />
      <div className="main__left">
        {/* <About />
        <EditPost />
        <PostLoad /> */}
        <Post />
      </div>
      <div className="main__right">
        <Header />
        <Blog />
      </div>
      {/* <div className="main__right">
        <Header />
        <Profile />
      </div> */}
      {/* <Modal /> */}
    </div >
  );
}

export default App;
