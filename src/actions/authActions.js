import axios from 'axios';


export const AUTHORIZATION = 'AUTHORIZATION';
export function login(data) {
  const request = axios.post('http://localhost/SurveyAPI/api/v1/Authorize',data)
    return{
    type : AUTHORIZATION,
    payload : request
  };
    }