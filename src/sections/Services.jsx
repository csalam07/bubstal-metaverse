import { S1, S2, S3, S4, S5, S6 } from '../assets';
import { ServiceCard } from '../components';

const serviceData = [
  {
    id: 1,
    icon: S1,
    title: 'Human Connection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    icon: S2,
    title: 'Presentation Mode',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    icon: S3,
    title: 'Multiple Immersive Screens',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    icon: S4,
    title: 'Light Weight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    icon: S5,
    title: 'Relax Workspace',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    icon: S6,
    title: 'Memoboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];
function Services() {
  return (
    <section className="relative hero min-h-screen bg-base-200" id="services">
      <div className="hero-content flex-col py-10">
        <div className="text-center">
          <h2 className="font-bold text-lg text-primary pb-5">Key features</h2>
          <h1 className="text-5xl font-extrabold">
            Borderless. Powerful. Provoking.
          </h1>
          <p className="py-6 leading-8">
            Bubstal build our Metaverse around your imagination.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {serviceData?.map((data) => (
            <ServiceCard
              key={data.id}
              img={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
