import React from 'react'
import './Register.css';
function Register({closeRegisterHandler}) {
    

    return (
        <div className="register">
            <div className="register-box">
                <input type="text" placeholder="ENTER USER NAME"/>
                <input type="text" placeholder="ENTER EMAIL ADDRESS"/>
                <input type="password" placeholder="ENTER PASSWORD"/>
                <input type="text" placeholder="ENTER PHONE NUMBER"/>
                <input type="text" placeholder="ENTER ADDRESS"/>
                <button onClick={closeRegisterHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Register;
