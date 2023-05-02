function ServiceCard({ img, title, description }) {
  return (
    <div
      className="w-96 bg-base-300 flex flex-col items-center rounded-xl hover:border-gray-600 hover:bg-base-200 hover:border cursor-pointer"
      data-aos="flip-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <figure className="mt-5">
        <img src={img} alt={title} className="mask mask-hexagon-2" />
      </figure>

      <div className="m-5">
        <h1 className="text-base-content font-bold text-center">{title}</h1>
        <p className="text-sm py-3">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
