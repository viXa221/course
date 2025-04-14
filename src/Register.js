import { useState } from 'react';

const Register = () => {
    const [username, setUserName] = useState('');//useState го използвам, за да запази стойностите и промените
    const [password, setPassword] = useState('');
    //password и username съхраняват информацията, която потребителя е написал в тези 2 полета
//


    const handleRegister = () => {//тук се проверява дали идвете полета са попълнени, ако да:
        if(!username || !password){//if-a проверява, дали някое от полетата не е попълнено и те връща обратно, за да го попълниш
            alert('Моля, попълнете  полетата!');
            return;
        }

        const userData = {username, password};//създава обектите в userData със стойностите му
        localStorage.setItem("registeredUser", JSON.stringify(userData));//записва го тук като текст чрез json
        console.log('Регистрацията е направена успешно!');//показва резултата
        setUserName('');//тук се изчистват полетата,  за да се премине кум следващия етап
        setPassword('');
    };

    return(
        <div>
            <h2>Регистрация</h2>
            <input type='text' placeholder='Въведете име' value={username}
            onChange={(e) => 
                setUserName(e.target.value)}
                />
                <input type='Password' placeholder='Въведете парола' value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleRegister}>Регистрация</button>
        </div>
    )
}
export default Register;

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