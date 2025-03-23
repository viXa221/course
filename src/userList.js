import React, { useState } from "react";
import usersData from "users.json"; // Импортираме JSON файла

const UserList = ({ onLogin }) => {
  const [users] = useState(usersData);
  const [inputName, setInputName] = useState("");
  const [inputPass, setInputPass] = useState("");

  // Функция за вход
  const handleLogin = () => {
    const user = users.find(
      (u) => u.name === inputName && u.password === inputPass
    );

    if (user) {
      onLogin(user); // Изпращаме информация за влезлия потребител към App.js
    } else {
      alert("Грешно име или парола!");
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Име"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Парола"
        value={inputPass}
        onChange={(e) => setInputPass(e.target.value)}
      />
      <button onClick={handleLogin}>Влез</button>
    </div>
  );
};

export default UserList;

