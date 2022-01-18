import './blog.scss';

const postsTest = [
  {
    "_id": "61ca0e10d06b1ed9a357aaa8",
    "title": "JavaScript: Как с помощью Dadata определить город по IP?",
    "text": "На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.",
    "views": 301,
    "img": true,
    "user": {
      "_id": "61c773aa09ab4d6ab0083a8a",
      "fullName": "Vasya Pupkin",
      "email": "test@test.ru",
      "password": "$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m",
      "createdAt": "2021-12-25T08:40:26.074Z",
      "updatedAt": "2021-12-25T19:40:26.074Z",
      "__v": 0
    },
    "createdAt": "2021-12-27T08:06:44.876Z",
    "updatedAt": "2021-12-27T08:06:59.093Z",
    "__v": 0
  },
  {
    "_id": "61ca0e10d06b1ed9a357aaa7",
    "title": "Какой-то очень интересный заголовок",
    "text": "Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur. Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur.",
    "views": 55,
    "user": {
      "_id": "61c773aa09ab4d6ab0083a8a",
      "fullName": "Vasya Pupkin",
      "email": "test@test.ru",
      "password": "$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m",
      "createdAt": "2021-12-25T08:40:26.074Z",
      "updatedAt": "2021-12-25T19:40:26.074Z",
      "__v": 0
    },
    "createdAt": "2021-12-27T08:06:44.876Z",
    "updatedAt": "2021-12-27T08:06:59.093Z",
    "__v": 0
  }
];

const Blog = (posts) => {
  return (
    <div className="blog">
      <ul className="blog__list">
        {[...Array(6).keys()]
          .map(a =>
            postsTest.map((post) =>
              <li className="blog__item" key={post._id + a}>
                <div className="blog__wrapper">
                  <h3 className="blog__title">{a + ' ' + post.title}</h3>
                  <p className="blog__text">{post.text}</p>

                  <div className="blog__data">
                    {/* <p className="blog__date">12 августа 2019 в 08:06</p> */}
                    <p className="blog__date">{post.createdAt}</p>
                    <p className="blog__views">{post.views}</p>
                  </div>
                </div>
                {post.img &&
                  <img
                    className="blog__img"
                    src="./img/blog2.jpg"
                    width="165px"
                    height="165px"
                    alt=""
                  />}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Blog;
