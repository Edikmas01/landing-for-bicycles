import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__header">
          <img
            className="hero__logo"
            src="/public/assets/images/logo.png"
            alt="Round Rock Logo"
          />
          <h1 className="hero__title">
            Round Rock <samp className="samp"> Bicycle Repair</samp>
          </h1>
        </div>

        <div className="hero__body">
          <h2 className="hero__pre-title">What is Lorem Ipsum</h2>
          <h1 className="hero__heading">What is Lorem Ipsum</h1>
          <p className="hero__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="hero__button">Help Me</button>
        </div>
      </div>
      <div className="hero__img-wrapper">
        <img
          src="/assets/images/hero.png"
          alt="Bike Repair"
          className="hero__img"
        />
        <img
          src="/assets/images/ellipse-mask.png"
          alt="Ellipse Overlay"
          className="hero__img-overlay"
        />
      </div>
    </section>
  );
};
