import "./Hero.css";
import { motion } from "framer-motion";


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
          <motion.h2
            className="hero__pre-title"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What is Lorem Ipsum
          </motion.h2>
          <motion.h1
            className="hero__heading"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            What is Lorem Ipsum
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </motion.p>
          <motion.button
            className="hero__button"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Help Me
          </motion.button>
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
