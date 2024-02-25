import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import './App.css';

toast.configure()
function Generator()
{

  const notify=()=>
  {
    toast('Basic information')
  }

  return(
    <div className='App'>
      <button onClick={notify}>Notify!</button>

    </div>
  );
}




export default Generator