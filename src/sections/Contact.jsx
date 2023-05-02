import { Banner, footer } from '../assets';

function Contact() {
  return (
    <section
      id="contact"
      className="hero bg-base-200"
      style={{ backgroundImage: `url(${Banner})` }}
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <h1 className="text-5xl font-bold">Drop Us a Line</h1>
        <img src={footer} className="max-w-sm animate-bounceY" />
        <label htmlFor="subscribe" className="btn btn-secondary btn-outline">
          Subscribe
        </label>
      </div>
    </section>
  );
}

export default Contact;
