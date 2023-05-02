import { menus } from './header/menus';

function Drawer() {
  return (
    <div
      className="drawer absolute z-10 lg:hidden"
      style={{
        height: 'calc(100% - 4rem)',
      }}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <div className="mt-10">
            {menus.map((menu) => (
              <li key={menu.title}>
                <a>{menu.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
