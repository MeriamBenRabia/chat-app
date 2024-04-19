import React, { useContext } from "react";

import {Context} from '../context';

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {

  const { 
    username,
    setUsername,
    secret,
    setSecret,
    userType,
    setUserType,} = useContext(Context)

    const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if(username.length === 0 || secret.length === 0 || !userType) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username: username + " - " + userType, secret: secret},
      {headers: {"Private-key": '89e700af-15ee-4c36-9408-2db93670cc65'}}
    ).then(r => router.push('/chats'))

  }

  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={e => onSubmit(e)} >
        <div className="auth-title">LiveWell Chat</div>

        <div className="input-container">
          <input
            placeholder="Username"
            className="text-input"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            className="text-input"
            onChange={e => setSecret(e.target.value)}
          />
        </div>
        <br />
        <div className="input-container">
          <label>
            Doctor
            <input
              type="radio"
              value="Doctor"
              checked={userType === 'Doctor'}
              onChange={(e) => setUserType(e.target.value)}
            />
        </label>
        <label>
          Patient
            <input
              type="radio"
              value="Patient"
              checked={userType === 'Patient'}
              onChange={(e) => setUserType(e.target.value)}
            />
        </label>
        <br />
        </div>
        <br />
        <button type="submit" className="submit-button">
          Login / Sign Up
        </button>
      </form>

    </div>
  </div>;
}
