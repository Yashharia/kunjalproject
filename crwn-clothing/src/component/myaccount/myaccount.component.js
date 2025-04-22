import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user.context';
import { EmailAuthCredential } from 'firebase/auth';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavLink, useNavigate } from 'react-router-dom';



const MyAccount = () =>  {
    const userContextData = useContext(UserContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const navigate= useNavigate();

    // const name = userContextData
    console.log(userContextData);
    useEffect(()=>{
        if(userContextData['userData'] != null){
            setName(userContextData['userData']['displayName'])
            setEmail(userContextData['userData']['email'])
        }
    },[userContextData])
  return (
    <div>
    <h1>My Account </h1>
    <h3>Name:{name}</h3>
    <h3>Email:{email}</h3>
   
                <NavLink as='span' onClick={()=>{
                    signOutUser(navigate);
                }}>
                  SIGN OUT
                </NavLink>
            
    </div>
  )
}

export default MyAccount;
