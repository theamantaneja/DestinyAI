import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Context } from '../../context/Context';
import './SignIn.css'


const SignIn = () => {

  const { setUser } = useContext(Context);

  return (
    <GoogleLogin
        onSuccess={credentialResponse => {
            const credentialResponseDecoded = jwtDecode(
              credentialResponse.credential
            );
            console.log(credentialResponseDecoded);
            setUser(credentialResponseDecoded);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
  )
}
export default SignIn