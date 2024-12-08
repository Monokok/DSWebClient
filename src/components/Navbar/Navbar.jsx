import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  console.log(JSON.stringify(user));

    return (
      <div>
        <h3>{user ? user.role + ' ' + user.name : 'Гость'}</h3>
        <nav>
          <div>
            <Link to="/">Главная</Link>
          </div>

          <div>
            <Link to="/profile">Мой профиль</Link>
          </div>

          <div>
            <Link to="/register">Регистрация</Link>
          </div>

          <div>
            <Link to="/login">Войти</Link>
          </div>

          
        </nav>
      </div>
    );
};

export default Navbar;
