import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Register = () => {
    const [name, setFirstName] = useState('');
    const [surname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    async function handleSubmit (e){
        e.preventDefault();
        setIsPending(true);

        //
        //TODO
        //check every input field with it's needed values (e.g. password must contain at least 6 characters, etc.)
        //

        try {
            const newUser = {
                name, surname, username, email, password
            };

            await axios.post("http://localhost:3000/users/register", newUser)
            .then(() => {
                setIsPending(false);
                history.push('/sign_in')
            });
        } catch (err) {
            console.error(err);
        }
    }

    return ( 
        <div className="register">
            <div className="poster-preview">
                
            </div>
            <div className="input-section">
                <h3 className="title">Get started now</h3>
                <form onSubmit={handleSubmit}>
                    <label>First name</label>
                    <input 
                        type="text"
                        required
                        value = {name}
                        onChange = {(e) => setFirstName(e.target.value)}
                    />
                    <label>Last name</label>
                    <input 
                        type="text"
                        required
                        value = {surname}
                        onChange = {(e) => setLastName(e.target.value)}
                    />
                    <label>E-mail</label>
                    <input 
                        type="email"
                        required
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <label>Username</label>
                    <input 
                        type="text"
                        required
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        required
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <label>Repeat password</label>
                    <input 
                        type="password"
                        required
                        value = {repeatPassword}
                        onChange = {(e) => setRepeatPassword(e.target.value)}
                    />
                    { !isPending && <button className="button" type="submit">Register</button> }
                    { isPending && <button disabled className="button">Register</button> }
                </form>
            </div>            
        </div>
     );
}
 
export default Register;