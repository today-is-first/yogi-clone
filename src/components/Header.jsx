import Logo from '../../public/asset/Logo.svg';
import menu from '../../public/asset/menu.svg';
import person from '../../public/asset/person_outline.svg';

const Header = () => {
  return (
    <section className="header">
      <div className="logo-wrapper">
        <img src={Logo} className="logo" />
      </div>
      <div className="navbar">
        <a>이벤트</a>
        <a>고객센터</a>
        <div className="profile-wrapper">
          <div className="hamburger">
            <img src={menu} />
          </div>
          <div className="profile">
            <img src={person} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
