import { BsMouse } from 'react-icons/bs';

function NextPageBtn({ path }) {
  return (
    <a
      href={path}
      className="btn btn-ghost animate-bounce absolute bottom-[5%] sm:bottom-[10%] left-[50%] z-50"
    >
      <BsMouse className="h-8 w-8" />
    </a>
  );
}

export default NextPageBtn;
