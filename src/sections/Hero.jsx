import { Banner, HeroImg, Icon1, Icon2, Icon3 } from '../assets';
import { NextPageBtn } from '../components';

function Hero() {
  return (
    <section
      id="home"
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
      data-aos="fade-up"
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
        <div className="relative">
          <img
            src={Icon1}
            className="max-w-sm absolute -bottom-16 -left-16 animate-bounceX"
          />
          <img
            src={Icon2}
            className="max-w-sm absolute -right-10 top-[30%] animate-bounceX"
          />
          <img src={Icon3} className="max-w-sm absolute animate-bounceX" />

          <img src={HeroImg} className="max-w-sm animate-bounceY" />
        </div>
        <div>
          <h1 className="text-5xl font-extrabold leading-snug">
            A workspace <br />
            full of imagination
          </h1>
          <p className="py-6 leading-8">
            In the metaverse, there are no limits to what you can achieve.
            Become the hero you were always meant to be and blaze a trail
            through the virtual world. Are you ready to take your place among
            the heroes of the metaverse? Join us and unlock your true potential.
          </p>
          <NextPageBtn path="#about" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
