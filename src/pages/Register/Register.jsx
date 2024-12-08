// src/pages/Register/Register.jsx
const Register = () => {
    return (
      <div className="register">
        <label htmlFor="login">Укажите (Логин):</label>
        <input id="username" className="login" type="text" placeholder="Укажите почту (Логин)" />
  
        <label htmlFor="name">Укажите ФИО</label>
        <input id="name" className="name" type="text" placeholder="Укажите ФИО" />
  
        <label htmlFor="password">Пароль</label>
        <input id="password" className="password" type="password" placeholder="Укажите пароль" />
        
        <label htmlFor="confirmPassword">Подтвердите пароль</label>
        <input id="password" className="confirmPassword" type="password" placeholder="Подтвердите пароль" />

        <label htmlFor="date">Укажите дату рождения</label>
        <input id="birthDate" className="birthDate" type="date" placeholder="Укажите дату рождения" />
        <button>Зарегистрироваться</button>
        
      </div>
    );
  };
  

export default Register;
