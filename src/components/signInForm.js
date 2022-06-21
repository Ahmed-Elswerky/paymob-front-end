import { useState, useEffect } from 'react';

export default function SignInForm({  handleSubmit }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={(e)=>handleSubmit(e,userName,password)}>
            <label>UserName
                <input type="text" name="username" id='username-input' value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
            <br />
            <label>Password
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" id='login-button' disabled={!(userName.length > 0 && password.length > 0)}>Sign In</button>
        </form>)
}