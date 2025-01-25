import React from 'react';

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem('logguserLoggedInData',' ')
    props.changeUser('')
   // window.location.reload();
  }

  return (
    <div className='flex justify-between space-x-0 py-5 px-5'>
      <div className='flex flex-col items-start'>
        <h3 className='font-semibold text-xl'>Hello 👋</h3>
        <span className='font-bold text-lg px-5 py-2'>{props.data?.firstName || 'Guest'}</span>
      </div>
      <div>
        <button onClick={logOutUser} className='flex bg-red-600 p-1 rounded hover:bg-black border-solid border-2 border-yellow-800'>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
