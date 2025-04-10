import { useEffect, useState } from "react";
import "./Services.css";

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
      <div className="services__list">
        {services.map((service) => (
          <div key={service.id} className="services-card">
            <div className="services-card__img-wrapper">
              <img
                src={service.img}
                alt={service.name}
                className="services-card__img"
              />
            </div>
            <h2 className="service-card__title">{service.name}</h2>
            <p className="service-card__description">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="services__btn">Get discount 10%</button>
    </section>
  );
};
