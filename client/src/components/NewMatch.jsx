import React, { Fragment, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';

function NewMatch() {
  const initialState = { teamOne: "", teamTwo: "", teamOneScore: 0, teamTwoScore: 0 };
  const [newMatch, setNewMatch] = useState(initialState);
  const { setMsg } = useContext(userContext)
  const nav = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    setNewMatch({ ...newMatch, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newMatch.teamOne.trim() == "" || newMatch.teamTwo.trim() == "") {
      setMsg("Enter all the Fields");
      return;
    }

    console.log(newMatch);
  }

  return (
    <Fragment>
      <section className="page form_page">
        <form autoComplete='OFF' onSubmit={(e) => handleSubmit(e)}>
          <h1 className="form_title">Create New Match</h1>
          <div className="form_group">
            <label htmlFor="teamOne">Team-1 Name</label>
            <input
              type="teamOne"
              name="teamOne"
              id="teamOne"
              onChange={(e) => handleEdit(e)}
              value={newMatch.teamOne}
            />
          </div>

          <div className="form_group">
            <label htmlFor="teamTwo">Team-2 Name</label>
            <input
              type="text"
              name="teamTwo"
              id="teamTwo"
              onChange={(e) => handleEdit(e)}
              value={newMatch.teamTwo}
            />
          </div>

          <input
            type="submit"
            value="Start"
          />
        </form>
      </section>
    </Fragment>
  )
}

export default NewMatch;