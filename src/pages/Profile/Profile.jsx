// src/pages/Profile/profile.jsx

const Profile = ({user}) =>{
    if (user  === undefined){
        return(
            <div>Войдите в профиль</div>
        )
    }
    return (
        
        <div className="profile">
            <h1>Профиль</h1>
            <h2>ФИО: {user.name}</h2>
            <h2>Роль: {user.role}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Дата регистрации: {user.registerDate}</h2>
            <h2>Контактный номер: {user.number}</h2>
            <h2>Дата рождения: {user.birthDate}</h2>
            <button className="logout">Выйти</button>
            
        </div>
    );
}

export default Profile;