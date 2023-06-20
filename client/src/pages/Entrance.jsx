import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });

      const userId = response.data.userId;
      window.location.href = `/profile/${userId}`;
    } catch (error) {
      console.error('Giriş işlemi başarısız oldu:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='w-full flex flex-row justify-evenly items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className=''>
          <div className='flex flex-col'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
              <div className='p-12 space-y-4 md:space-y-12 sm:p-24'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                  Login to your account
                </h1>
                <form className='space-y-4 md:space-y-6'>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                      Email address
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                      placeholder='name@company.com'
                      required=''
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                      required=''
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type='button'
                    onClick={handleSubmit}
                    className='w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-400 mb-5'
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
