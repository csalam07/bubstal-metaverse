import { p1, p2, p3, p4, p5 } from '../assets';
import { NextPageBtn } from '../components';

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'Issac Choi',
      position: 'Co-Founder',
      avatar: p1,
    },
    {
      id: 2,
      name: 'Michael Jordan',
      position: 'Co-Founder',
      avatar: p2,
    },
    {
      id: 3,
      name: 'Sandra Wong',
      position: 'Co-Founder | FRM part',
      avatar: p3,
    },
    {
      id: 4,
      name: 'LinkedIn Member',
      position: 'Graphic Design',
      avatar: p4,
    },
    {
      id: 5,
      name: 'LinkedIn Member',
      position: 'Marketing Officer',
      avatar: p5,
    },
  ];
  return (
    <section
      className="h-screen flex items-center justify-center relative"
      id="teams"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="max-w-7xl mx-auto p-5 space-y-10">
        <h1 className="text-center font-bold text-5xl">Our Teams</h1>
        <div className="carousel rounded-box w-96 md:w-full gap-5">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-base-200 carousel-item w-64 lg:w-96 flex-col text-center space-y-5 p-5 hover:border border-gray-600"
            >
              <img
                src={team.avatar}
                className="mask mask-diamond"
                alt={team.name}
              />
              <div className="space-y-2">
                <h1 className="text-xl font-extrabold">{team.name}</h1>
                <p className="text-sm">{team.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NextPageBtn path="#contact" />
    </section>
  );
}

export default Teams;
