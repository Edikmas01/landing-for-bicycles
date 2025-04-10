import "./About.css";

export const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">About us</h1>
      <p className="about__pretitle">We are a big family</p>
      <div className="about__list">
        <img
          src="/assets/images/AboutPhoto.png"
          alt="About Us"
          className="about-card__img"
        />
        <div className="grup">
          <h2 className="about-card__title">Company name</h2>
          <p className="about-card__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="about__btn">Get discount 10%</button>
        </div>
      </div>
    </section>
  );
};
