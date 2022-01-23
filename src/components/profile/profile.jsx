import { useState } from "react";
import Blog from "../blog/blog";
import Comments from "../comments/comments";

import "./profile.scss";

// const initialValue = { id: "", title: "", desc: "", file: "", text: "" };

const TABS = [
  { id: 0, name: "Статьи", content: "Blog" },
  { id: 1, name: "Комментарии", content: "Comments" },
];

const USER_ID="61c773aa09ab4d6ab0083a8a"

const Profile = () => {
  const [tabActive, setTabActive] = useState(0);

  const handleTab = (e, i) => {
    e.preventDefault();
    setTabActive(i);
  };

  return (
    <section className="profile">
      <h2 className="profile__title"><span className="visually-hidden">Профиль: </span>Вася Пупкин</h2>
      <p className="profile__info">
        Дата регистрации:{" "}
        <span className="profile__info-date">12 августа 2019 в 08:06</span>
      </p>

      <div className="profile__publications">
        <div className="profile__tabs">
          {TABS.map((tab, i) => (
            <button
              className={`profile__tab ${i === tabActive ? 'profile__tab--active' : ''}`}
              onClick={(e) => handleTab(e, i)}
              key={i}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="profile__publication">
          {TABS[tabActive].content === 'Blog' &&
           <Blog />
           }
          {TABS[tabActive].content === 'Comments' &&
            <Comments user_id={USER_ID} simplified />
          }
        </div>
      </div>
    </section>
  );
};

export default Profile;
