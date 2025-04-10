import "./Contact.css";

export const Contact = () => { 
    return (
      <section className="contact">
        <div className="contact__group">
          <h1 className="contact__title">Contact Us</h1>
          <p className="contact__text">Leave a request</p>

          <div className="contact__wrapper">
            {/* <div className="contact__l"> */}
            <form className="contact__form">
              <input
                type="text"
                className="contact__input"
                placeholder="Your name"
              />
              <input
                type="email"
                className="contact__input"
                placeholder="Your email"
              />
              <textarea
                className="contact__textarea"
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="contact__button">
                Send
              </button>
            </form>
            {/* </div> */}

            {/* <div className="contact__r"> */}
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__icon">
                  {" "}
                  <img src="/assets/icon/phone.png" alt="Phone" />
                </span>{" "}
                100 985-0045
              </li>
              <li className="contact__item">
                <span className="contact__icon">
                  {" "}
                  <img src="/assets/icon/email.png" alt="Email" />
                </span>{" "}
                Instagram@gmail.com
              </li>
              <li className="contact__item">
                <span className="contact__icon">
                  <img src="/assets/icon/map.png" alt="map" />
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=270×17+Example+Street,City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  270×17 Example Street, City
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>
    );
}
