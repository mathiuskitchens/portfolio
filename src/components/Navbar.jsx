import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) {
      // User prefers dark mode
      console.log("User prefers dark mode");
      document
        .querySelector("[data-theme]")
        .setAttribute("data-theme", "black");
    } else {
      // User prefers light mode
      console.log("User prefers light mode");
      document.querySelector("[data-theme]").setAttribute("data-theme", "lofi");
    }
  }, [isDarkMode]);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="h-full relative">
        <div className="navbar border-b-2 flex justify-center md:justify-around sticky top-0 z-50 bg-base-100">
          <div className="drawer w-16 fixed left-0 top-4 md:hidden z-50">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={() => setIsDrawerOpen(!isDrawerOpen)}
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" drawer-button w-16 swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li className="text-xl">
                  <Link to="/About" onClick={handleDrawerClose}>
                    About
                  </Link>
                </li>
                <li className="text-xl">
                  <Link to="/Projects" onClick={handleDrawerClose}>
                    Projects
                  </Link>
                </li>
                <li className="text-xl">
                  <Link to="/Contact" onClick={handleDrawerClose}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar flex justify-center md:justify-around w-screen fixed top-0 z-40 bg-base-100 border-b-2 mt-0 pt-2">
            <span className="text-xl btn btn-ghost rounded-lg">
              <Link to="/">Matthew Kitchens</Link>
            </span>

            <button className="btn btn-ghost text-xl hidden md:inline-flex rounded-lg">
              <Link to="/About">About</Link>
            </button>
            <button className="btn btn-ghost text-xl hidden md:inline-flex rounded-lg">
              <Link to="/Projects">Projects</Link>
            </button>
            <button className="btn btn-ghost text-xl hidden md:inline-flex rounded-lg">
              <Link to="/Contact">Contact</Link>
            </button>
            <div>
              <label className="cursor-pointer grid place-items-center fixed top-0 right-0 p-5">
                <input
                  type="checkbox"
                  value="black"
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                />

                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>

                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
