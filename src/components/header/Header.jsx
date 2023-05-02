import { menus } from './menus';
import { BiMenuAltRight } from 'react-icons/bi';

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      data-aos="slide-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Bubstal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menus?.map((menu) => (
              <li key={menu.title}>
                <a href={menu.path}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-secondary btn-outline btn-sm lg:btn-md">
            Connect
          </a>
          <div className="btn btn-sm btn-ghost lg:hidden drawer-content">
            <label htmlFor="my-drawer">
              <BiMenuAltRight className="h-8 w-8 cursor-pointer" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
