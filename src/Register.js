import { useState } from 'react';

const Register = () => {
    const [nameRegister, setNameRegister] = useState('');
    const [passRegister, setPassRegister] = useState('');

    const handleRegister = () => {
        if(!nameRegister || !passRegister){
            alert('Моля, попълнете всички полета!');
            return;
        }

        const userData = { username: nameRegister, password: passRegister};

        localStorage.setItem('registeredUser',  JSON.stringify(userData));

        alert('Успешна регистрация!');
    };

    return(
        <div>
            <h2>Регистрация</h2>
            <input type='text' placeholder='Въведете име' value={nameRegister}
            onChange={(e) => 
                setNameRegister(e.target.value)}
                />
                <input type='password' placeholder='Въведете парола' value={passRegister}
                onChange={(e) => setPassRegister(e.target.value)}
                />
                <button onClick={handleRegister}>Регистрация</button>
        </div>
    )
}

//Този файл създава форма за регистрация. В него има две полета за въвеждане, едно за 
// потребителско име и едно за парола - и бутон за изпращане на данните

//useState съхранява въведените данни в случая, създаваме два useState променливи 
//(nameRegister и passRegister), които ще запазят стойностите, въведени от потребителят.
//Функцията handleRegister се изпълнява при натискане на бутона, проверява дали са поплнени и двете полета
//ако не са, показва съобщение. Ако всичко е наред, записва въведените данни в localStorage като json.
// в input-a, useState следи състоянието на полетата
//когато потребителя въвежда текст, оnChange обновява стответната useState променлива.
//когато натисне бутона, се изпълнява handleRegister

//Как работи страницата Register?
//там се въвежда потребителското име и паролата на потребителя,
//данните се записват в localStorages