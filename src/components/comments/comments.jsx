import { useState, useEffect } from "react";
import axios from "axios";

import "./comments.scss";

let commentsTest = [
  {
    _id: "11",
    text: "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.",
    user: {
      _id: "61c773aa09ab4d6ab0083a8a",
      fullName: "Vasya Pupkin",
      email: "test@test.ru",
    },
    post: {
      _id: "61ca0e10d06b1ed9a357aaa8"
    },
    createdAt: "2021-12-27T08:06:44.876Z",
  },
  {
    _id: "12",
    text: "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.",
    user: {
      _id: "61c773aa09ab4d6ab0083a8a",
      fullName: "Vasya Pupkin",
      email: "test@test.ru",
    },
    post: {
      _id: "61ca0e10d06b1ed9a357aaa8"
    },
    createdAt: "2021-12-27T08:06:44.876Z",
  },
  {
    _id: "13",
    text: "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.",
    user: {
      _id: "user2",
      fullName: "Vasya2 Pupkin2",
      email: "test2@test.ru",
    },
    post: {
      _id: "61ca0e10d06b1ed9a357aaa8"
    },
    createdAt: "2021-12-27T08:06:44.876Z",
  },
  {
    _id: "21",
    text: "2-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.",
    user: {
      _id: "61c773aa09ab4d6ab0083a8a",
      fullName: "Vasya Pupkin",
      email: "test@test.ru",
    },
    post: {
      _id: "61ca0e10d06b1ed9a357aaa7"
    },
    createdAt: "2021-12-27T08:06:44.876Z",
  },
  {
    _id: "22",
    text: "2-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.",
    user: {
      _id: "user2",
      fullName: "Vasya2 Pupkin2",
      email: "test2@test.ru",
    },
    post: {
      _id: "61ca0e10d06b1ed9a357aaa7"
    },
    createdAt: "2021-12-27T08:06:44.876Z",
  },
];

const Comments = ({ post_id, user_id, simplified = false }) => {
  const [comments, setcomments] = useState(commentsTest);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5656/posts?orderBy=desc")
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data.items);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    if (user_id) {
      setcomments(commentsTest.filter((comment) => comment.user._id === user_id));
    };

    if (post_id) {
      setcomments(commentsTest.filter((comment) => comment.post._id === post_id));
    };
  }, []);

  const formatDate = (date) => {
    var options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Date(date).toLocaleString("ru", options).replace("г.,", "в");
  };

  return (
    <div className="comments">
      <h3 className={`comments__title${simplified ? ' visually-hidden' : ''}`}>
        Комментарии (<span className="comments__amount">{comments.length}</span>)
      </h3>

      <ul className="comments__list">
        {[...Array(1).keys()].map((a) =>
          comments.map((comment, i) => (
            <li className="comments__item" key={comment._id + a}>
              <div className="comments__data">
                {!simplified && 
                  <a className="comments__autor" href="#">{comment.user.fullName}</a>
                }
                <p className="comments__date">{formatDate(comment.createdAt)}</p>
              </div>
              <p className="comments__text">{comment.text}</p>
            </li>
          ))
        )}
      </ul>

      {/* <div className="blog__paginator">
        <div className="blog__nav">
          <a
            className="blog__nav-btn blog__nav-btn--back blog__nav-btn--disabled"
            href="#"
          >
            <span className="visually-hidden">Назад</span>
          </a>
          <a className="blog__nav-btn blog__nav-btn--next" href="#">
            <span className="visually-hidden">Вперед</span>
          </a>
        </div>
        <p className="blog__nav-info">Страница 1 из 10</p>
      </div> */}
    </div>
  );
};

export default Comments;
