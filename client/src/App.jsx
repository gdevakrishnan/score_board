import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import userContext from './context/userContext'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Message from './components/Message';
import { userVerify } from './services/ServiceWorkers'
import PageNotFound from './components/PageNotFound'
import Logout from './components/Logout'
import NewMatch from './components/NewMatch'
import Score from './components/Score'

function App() {
  const initialState = { teamOne: "", teamTwo: "", teamOneScore: 0, teamTwoScore: 0 };
  const [newMatch, setNewMatch] = useState(initialState);
  const [userDetails, setUserDetails] = useState(null);
  const flag = (newMatch.teamOne.trim() !== "" && newMatch.teamTwo.trim() !== "" && newMatch.teamOneScore >= 0 && newMatch.teamTwoScore >= 0) ? true: false;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      userVerify({ token })
        .then((response) => {
          if (response.message == "Verified User") {
            setUserDetails(response.data);
          } else {
            setUserDetails(null);
          }
        })
        .catch((e) => console.log(e.message));
    } else {
      setUserDetails(null);
    }
  }), [userDetails];

  const [msg, setMsg] = useState(null);
  const context = {
    msg,
    setMsg,
    userDetails,
    setUserDetails,
    newMatch,
    setNewMatch
  }

  return (
    <Fragment>
      <userContext.Provider value={context}>
        <Router>
          <Navbar />
          <Message />
          <Routes>
            <Route path={'/'} index element={<Dashboard />} />
            <Route path={'/register'} element={(userDetails) ? <PageNotFound /> : <Register />} />
            <Route path={'/login'} element={(userDetails) ? <PageNotFound /> : <Login />} />
            <Route path={'/new_match'} element={(userDetails) ? <NewMatch /> : <PageNotFound />} />
            <Route path={'/score'} element={(userDetails && flag) ? <Score /> : <PageNotFound />} />
            <Route path={'/logout'} element={(userDetails) ? <Logout /> : <PageNotFound />} />
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
          <Outlet />
          <Footer />
        </Router>
      </userContext.Provider>
    </Fragment>
  )
}

export default App