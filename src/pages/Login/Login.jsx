// src/pages/Login/Login.jsx

const Login = () => {
    return (
      <div className="login">
        <label htmlFor="login">Почта (Логин):</label>
        <input id="username" className="login" type="text" placeholder="Укажите почту (Логин)" />
  
  
        <label htmlFor="password">Пароль</label>
        <input id="password" className="password" type="password" placeholder="Укажите пароль" />

        <button>Войти</button>        
      </div>
    );
  };
  

export default Login;
