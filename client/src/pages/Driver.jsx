import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

function Driver() {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null); // Seçilen sürücüyü tutmak için state

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/drivers')
      .then(response => response.json())
      .then(data => setDrivers(data));
  }, []);

  const handleSelectDriver = (driver) => {
    setSelectedDriver(driver);
    navigate('/profile'); // Profil sayfasına yönlendirme
  };

  return (
    <div className='mx-auto w-full'>
      <UserNavbar />
      <div className='relative overflow-x-auto mt-10 w-full'>
        <table className='mx-auto text-sm text-left text-gray-500 rounded-md'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-800'>
            <tr>
              <th scope='col' className='px-6 py-3 text-white'>
                Sürücü
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Araç Tipi
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Fiyat
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                Plaka
              </th>
              <th scope='col' className='px-6 py-3 text-white'>
                
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr className='border-b border-gray-200' key={driver.id}>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50'
                >
                  {driver.name}
                </th>
                <td className='px-6 py-4'>{driver.car_type}</td>
                <td className='px-6 py-4 bg-gray-50'>{driver.price}</td>
                <td className='px-6 py-4 bg-gray-50'>{driver.plate}</td>
                <td className='px-6 py-4 bg-gray-50'>
                  <button
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    onClick={() => handleSelectDriver(driver)}
                  >
                    Seç
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Driver;
