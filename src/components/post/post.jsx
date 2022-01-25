import Comments from '../comments/comments';

import './post.scss'

const post = {
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
}

const Post = () => {
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
    <section className="post">
      <header className="post__header">
        <h2 className="post__name">Какой-то очень интересный заголовок</h2>
        <div className="post__data">
          <p className="post__date">{formatDate(post.createdAt)}</p>
          <p className="post__views">{post.views}</p>
        </div>
        <p className="post__desc">Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз то начинают, то забрасывают изучение технологий.</p>
        {/* <img
          className="about__img"
          src="./img/vasya-pupkin.jpg"
          width="584px"
          height="422px"
          alt="Vasya Pupkin"
        /> */}
      </header>
      <div className="post__main">
        <div className="post__content">
          <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis <a className="post__link" href=''>scelerisque leo</a> curabitur faucibus. Nec, sed porta ac enim. Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.</p>
          <h1 className="post__title post__title--h1">Заголовок H1</h1>
          <h2 className="post__title post__title--h2">Заголовок H3</h2>
          <h3 className="post__title post__title--h3">Заголовок H4</h3>
          <h4 className="post__title post__title--h4">Заголовок H2</h4>
          <h5 className="post__title post__title--h5">Заголовок H5</h5>
          <blockquote className='post__blockquote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis scelerisque leo curabitur</blockquote>
        </div>
        <div className="post__comments">
          <Comments post_id={post._id} />
          <form className="post__add-comment">
            <label htmlFor="newcomment">Добавить коментарий</label>
            <textarea name="newcomment" id="newcomment" cols="30" rows="10"></textarea>
            <input type="submit" value="Отправить"></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Post;
