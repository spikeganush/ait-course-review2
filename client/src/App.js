import React, { useEffect, useState } from 'react'
import Routes from './components/Routes'
import { UidContext } from './components/AppContext'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from './actions/user.actions'
import Header from './components/Header'

function App() 
{
  const [uid, setUid] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      //${process.env.REACT_APP_API_URL}
      await axios({
        method: 'get',
        url: `/jwtid`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data)
        })
        .catch((err) => {
          console.log('No Token in App.js')
          setUid(null)
        })
    }
    fetchToken()

    if (uid) dispatch(getUser(uid))
  }, [uid, dispatch])

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )

  const navSlide = () =>
  {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click', ()=>
    {
      nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, Header)=>
    {
      
    });

  }

  navSlide();

}

export default App
