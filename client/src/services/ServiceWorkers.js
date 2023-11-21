import Axios from 'axios';

const BASE_URL = "http://localhost:5000/score_board";

// REGISTER
export const createUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/register`, userDetails);
    const response = task.data;
    return response;
}

// LOGIN
export const getUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/login`, userDetails);
    const response = task.data;
    return response;
}

// TOKEN VERIFICATION
export const userVerify = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/user_verify`, userDetails);
    const response = task.data;
    return response;
}

// CREATE AND UPDATE SCORE
export const updateMatch = async (newMatch) => {
    const task = await Axios.put(`${BASE_URL}/match/update`, newMatch);
    const response = task.data;
    return response;
}

// TO RESET MATCH
export const resetMatch = async (newMatch) => {
    const task = await Axios.put(`${BASE_URL}/match/reset`, newMatch);
    const response = task.data;
    return response;
}
