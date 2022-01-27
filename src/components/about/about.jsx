import './about.scss'

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <h2 className="about__name">
          Vasya Pupkin
          <span className="about__desc">Блог фронтенд-разработчика</span>
        </h2>
        <img
          className="about__img"
          src="./img/vasya-pupkin.jpg"
          width="584px"
          height="422px"
          alt="Vasya Pupkin"
        />
      </div>
      <h3 className="about__title">Обо мне</h3>
      <p className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
        quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
        nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
        laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
        phasellus malesuada non nisi.
      </p>
    </section>
  );
};

export default About;

