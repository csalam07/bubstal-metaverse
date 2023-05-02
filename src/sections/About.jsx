function About() {
  return (
    <section className="hero min-h-screen relative" id="about">
      <div
        className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-7xl p-4 gap-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7DEVfUk2zCk"
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:pl-5">
          <h2 className="font-bold text-lg text-primary pb-5">Spaceless</h2>
          <h1 className="text-5xl font-extrabold">
            When workspace is not just a workspace
          </h1>
          <p className="py-6 leading-8">
            Forget the white office with bright lighting, in our metaverse, you
            can work at anywhere. Get rid of rigid desks and chairs, go get
            breath some fresh air in a space with constant changing view.
          </p>
          <button className="btn btn-secondary">Try For free</button>
        </div>
      </div>
    </section>
  );
}

export default About;
