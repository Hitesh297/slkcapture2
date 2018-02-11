import { AUTHORIZATION } from '../actions/authActions';

export default function (state = [], action) {
  switch (action.type) {
    case AUTHORIZATION:
        return action.payload.data;
  }
  return state;
}
