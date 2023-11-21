import React, { Fragment, useContext } from 'react'
import userContext from '../context/userContext'
import { resetMatch, updateMatch } from '../services/ServiceWorkers';
import { useNavigate } from 'react-router-dom';

function Score() {
    const { newMatch, setNewMatch, setMsg } = useContext(userContext)
    const nav = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        updateMatch(newMatch)
            .then((response) => {
                if (response.message === "Updated Successfully") {
                    setMsg(response.message);
                }
            })
            .catch((e) => {
                console.log(e.message);
            });
    }

    const handleReset = (e) => {
        e.preventDefault();
        resetMatch(newMatch)
            .then((response) => {
                if (response.message === "Reset Successfully") {
                    setMsg(response.message);
                    setNewMatch({ teamOne: "", teamTwo: "", teamOneScore: 0, teamTwoScore: 0 });
                    nav('/new_match');
                }
            })
            .catch((e) => {
                console.log(e.message);
            });
    }
    return (
        <Fragment>
            <section className="page score_page">
                <div className="main">
                    <div className="left board">
                        <h1 className='score_title'>Team 1: {newMatch.teamOne}</h1>
                        <h1 className='score'>Team 1 Score: {newMatch.teamOneScore}</h1>
                        <button
                            className="increaseBtn"
                            onClick={() => setNewMatch({ ...newMatch, teamOneScore: newMatch.teamOneScore + 1 })}
                        >Increase</button>
                    </div>
                    <div className="right board">
                        <h1 className='score_title'>Team 2: {newMatch.teamTwo}</h1>
                        <h1 className='score'>Team 2 Score: {newMatch.teamTwoScore}</h1>
                        <button
                            className="increaseBtn"
                            onClick={() => setNewMatch({ ...newMatch, teamTwoScore: newMatch.teamTwoScore + 1 })}
                        >Increase</button>
                    </div>
                </div>
                <div className="button">
                    <button className="btn updateBtn" onClick={(e) => handleUpdate(e)}>Update</button>
                    <button className="btn updateBtn" onClick={(e) => handleReset(e)}>Reset</button>
                </div>
            </section>
        </Fragment>
    )
}

export default Score