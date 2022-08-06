import { StyledHeader } from "./styles";
import logo from "../../assets/images/logo-in8-dev.svg";
import menu from "../../assets/icones/hamburguer.svg";
import menuOpen from "../../assets/icones/hamburguer-aberto0.svg";
import { useState, useEffect } from "react";

const Header = ({ registerRef, contactRef, listRef, matchesHeader }) => {
  const [isVisibleBlue, setIsVisibleBlue] = useState(true);

  const handleScroll = () => {
    const teste = window.scrollY <= 75;
    setIsVisibleBlue(teste);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <StyledHeader>
      <div
        className={`header__container ${
          isVisibleBlue ? undefined : `header__hidden`
        }`}
      >
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => {
            window.location.reload();
          }}
        />
        {!matchesHeader && (
          <img
            onClick={handleClick}
            className="menu__mobile"
            src={menu}
            alt=""
          />
        )}
        {isActive ? (
          <div onClick={handleClick} className="main__opacity"></div>
        ) : (
          <></>
        )}
        <nav
          onClick={handleClick}
          className={isActive ? "menu__appear" : "menu__desappear"}
        >
          {!matchesHeader && (
            <>
              <img className="menu__mobile" src={menuOpen} alt="" />
            </>
          )}
          <ul>
            <div>
              <li
                onClick={(e) => {
                  registerRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  handleClick;
                }}
              >
                cadastro
              </li>
            </div>
            <div>
              <li
                onClick={(e) => {
                  listRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  handleClick;
                }}
              >
                lista
              </li>
              <li
                onClick={(e) => {
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  handleClick;
                }}
              >
                sobre mim
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
