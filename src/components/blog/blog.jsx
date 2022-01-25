import { useState, useEffect } from "react";
import axios from "axios";

import "./blog.scss";

let postsTest = [
  {
    _id: "61ca0e10d06b1ed9a357aaa8",
    title: "JavaScript: Как с помощью Dadata определить город по IP?",
    text: "На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.",
    views: 301,
    img: true,
    user: {
      _id: "61c773aa09ab4d6ab0083a8a",
      fullName: "Vasya Pupkin",
      email: "test@test.ru",
      password: "$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m",
      createdAt: "2021-12-25T08:40:26.074Z",
      updatedAt: "2021-12-25T19:40:26.074Z",
      __v: 0,
    },
    createdAt: "2021-12-27T08:06:44.876Z",
    updatedAt: "2021-12-27T08:06:59.093Z",
    __v: 0,
  },
  {
    _id: "61ca0e10d06b1ed9a357aaa7",
    title: "Какой-то очень интересный заголовок",
    text: "Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur.",
    views: 55,
    user: {
      _id: "61c773aa09ab4d6ab0083a8a",
      fullName: "Vasya Pupkin",
      email: "test@test.ru",
      password: "$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m",
      createdAt: "2021-12-25T08:40:26.074Z",
      updatedAt: "2021-12-25T19:40:26.074Z",
      __v: 0,
    },
    createdAt: "2021-12-27T08:06:44.876Z",
    updatedAt: "2021-12-27T08:06:59.093Z",
    __v: 0,
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(postsTest);
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
    <section className="blog">
      <h2 className="visually-hidden">Статьи: </h2>
      <ul className="blog__list">
        {[...Array(1).keys()].map((a) =>
          posts.map((post, i) => (
            <li className="blog__item" key={post._id + a}>
              <a className="blog__link" href="#">
                <div className="blog__wrapper">
                  <h3 className="blog__title">{post.title}</h3>
                  <p className="blog__text">{post.text}</p>

                  <div className="blog__data">
                    <p className="blog__date">{formatDate(post.createdAt)}</p>
                    <p className="blog__views">{post.views}</p>
                  </div>
                </div>
                {post.img === true && (
                  <img
                    className="blog__img"
                    src="./img/blog2.jpg"
                    width="165px"
                    height="165px"
                    alt=""
                  />
                )}
              </a>
            </li>
          ))
        )}
      </ul>
      <div className="blog__paginator">
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
      </div>
    </section>
  );
};

export default Blog;
