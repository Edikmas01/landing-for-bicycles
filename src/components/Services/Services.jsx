import { useEffect, useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("api/services.json");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="services">
      <div className="services__bg">
        <h1 className="services__title">Services for you</h1>
        <p className="services__pretitle">Repair and maintenance</p>
      </div>
      <motion.div
        className="services__list"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="services-card"
            variants={cardVariants}
          >
            <div className="services-card__img-wrapper">
              <img
                src={service.img}
                alt={service.name}
                className="services-card__img"
              />
            </div>
            <h2 className="service-card__title">{service.name}</h2>
            <p className="service-card__description">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <button className="services__btn">Get discount 10%</button>
    </section>
  );
};
