import React from 'react';
import logo from '../logo.svg';
// import socket from '../socket';
import axios from 'axios';

export default function AuthBlock({ onLogin }) {
  const [lobbieID, setLobbieID] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!lobbieID || !userName) {
      return alert('Incorrect information.');
    }
    setLoading(true);
    await axios.post('/lobbies', {
      lobbieID,
      userName,
    });
    onLogin();
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-800 py-12 px-4 text-white sm:px-6 lg:px-8 items-center font-mono">
      <div className="max-w-md w-full space-y-8">
        <img src={logo} alt={'logo'} className="logo" />

        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Create or join chat rooom.
        </h2>
        <div className="rounded-md shadow-sm -space-y-px">
          <label htmlFor="email-address" className="sr-only">
            Username
          </label>
          <input
            type="text"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-700 text-gray-200 border-gray-900 placeholder-gray-400 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            required
          />
          <div>
            <label htmlFor="password" className="sr-only">
              Room ID
            </label>
            <input
              type="text"
              value={lobbieID}
              placeholder="Lobbie ID"
              onChange={(e) => setLobbieID(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-gray-700 text-gray-200 border-gray-900 placeholder-gray-400 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            disabled={isLoading}
            onClick={onEnter}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {!isLoading ? '#Join chat!' : '/Chat loading...'}
          </button>
        </div>
      </div>
    </div>
  );
}
