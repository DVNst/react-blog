import { useState} from "react";

import Comments from "../comments/comments";

import { formatDate } from "../../utils";

import "./post-load.scss";

const PostLoad = () => {
  return (
    <section className="post-load">
      <div className="post-load__header">
        <span className="post-load__header-block block"></span>
        <span className="post-load__header-block block"></span>
        <span className="post-load__header-block block"></span>
        <span className="post-load__header-block block"></span>
        <span className="post-load__header-block block"></span>
      </div>
      <div className="post-load__main block">
        {[...Array(3).keys()].map((_, i) => (
          <div className="post-load__post-blocks" key={i}>
            <span className="post-load__post-block"></span>
            <span className="post-load__post-block"></span>
            <span className="post-load__post-block"></span>
            <span className="post-load__post-block"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostLoad;
