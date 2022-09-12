import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../helpers/context';
import { BiCog } from 'react-icons/bi';
import KeyboardDropdown from './KeyboardDropdown';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const { user, userKeyboards } = useContext(UserContext);

  const navigate = useNavigate();

  // simulate a user user logging out by refreshing the page, which will reset the user context
  function refreshPage() {
    // when logging out, clear local data.
    window.localStorage.clear();
    window.location.reload(false);
    // send user to home page
    navigate('/ctt-front-end/');
  }

  return (
    <nav className="rounded px-2 py-2.5 font-normal text-dark-navy dark:text-pale-gold">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="logo-text text-dark-navy dark:text-pale-gold">
          <Link
            to="/ctt-front-end/"
            className="flex items-center hover:text-kinda-teal dark:hover:text-candle"
          >
            <img src="./images/logo.png" className="mr-3 h-20 sm:h-20" alt="logo" />
            <span className="logo-drip">CTHULHU</span>{' '}
            <span className="logo-lite">&nbsp;TEACHES TYPING</span>
          </Link>
        </div>
        <ul className="flex items-center  gap-2 font-light">
          {user && user !== 'null' ? (
            <>
              {user && userKeyboards ? <KeyboardDropdown /> : null}

              <li>
                <Link
                  to="/ctt-front-end/user"
                  aria-current="User Settings"
                  className="mx-2 flex gap-2 hover:text-kinda-teal dark:hover:text-blood-red"
                >
                  <BiCog className="text-2xl" />
                  <span>{user.name}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/ctt-front-end/"
                  className="mx-3 rounded-lg bg-darker-beige py-1 px-6 dark:bg-pale-gold dark:text-cosmic-purple"
                  aria-current="logout"
                  onClick={refreshPage}
                >
                  LOGOUT
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/ctt-front-end/login"
                  className="mx-3 rounded-lg bg-darker-beige p-0 py-1 px-6 text-lg shadow-lg hover:bg-kinda-teal  dark:bg-pale-gold dark:text-cosmic-purple dark:hover:bg-gold-hover"
                  aria-current="login"
                >
                  LOGIN
                </Link>
              </li>
              <li>
                <Link
                  to="/ctt-front-end/login"
                  className="mx-3 rounded-lg bg-darker-beige p-0 py-1 px-6 text-lg shadow-lg hover:bg-kinda-teal dark:bg-pale-gold dark:text-cosmic-purple dark:hover:bg-gold-hover"
                  aria-current="login"
                >
                  SIGNUP
                </Link>
              </li>
            </>
          )}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;