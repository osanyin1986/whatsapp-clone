import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }


    return (
        <div className ="login">
            <div className="login__container">
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtX9rAf2hwYmwoJFukuYYiMN-46wogH5kYA&usqp=CAU" alt="" />

        <div className="login__text">
        <h1>Login to WhatsApp</h1>
        </div>

            <Button  onClick={signIn} >

            Sign In With Google

            </Button>


            </div>

            
            
        </div>
    )
}

export default Login
