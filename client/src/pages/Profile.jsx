import React, { useState, useEffect } from 'react';
import UserNavbar from '../components/UserNavbar';

const Profile = ({ id }) => {
  const [user,setUser ] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }
   return (
    <div className='mx-auto w-full'>
      <UserNavbar />
      <div>
        <div className='flex flex-col'>
          <div className="flex flew-row mx-auto mt-10 p-10">
            <div className="flex flex-col">
              <img className="w-48 h-48 rounded-full" src={user.imageURL} alt="Rounded avatar" />
              <div className="px-4 py-6 sm:px-0">
                <dt className="text-sm text-center font-medium leading-6 text-gray-900">Kullanıcı</dt>
              </div>
            </div>
            <div className="flex flex-col ml-20">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">İsim Soyisim</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">E-mail</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.mail}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Parola</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">************</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-10 w-full">
        <table className="mx-auto text-sm text-left text-gray-500 rounded-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Sürücü
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Araç Tipi
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Fiyat
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Kalkış Konum
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Varış Konum
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                Burak Kurtuluş
              </th>
              <td className="px-6 py-4">
                UberTaxi
              </td>
              <td className="px-6 py-4 bg-gray-50">
                60.98
              </td>
              <td className="px-6 py-4 bg-gray-50">
                Fatih Mahallesi
              </td>
              <td className="px-6 py-4 bg-gray-50">
                Modernevler Mahallesi
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full mx-auto flex justify-center mt-4">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Hesabı sil
        </button>
      </div>
    </div>
  );
}

export default Profile;
