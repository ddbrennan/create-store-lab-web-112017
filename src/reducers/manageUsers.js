export default function manageUsers(state = {users: []}, action) {

  switch(action.type) {

    case 'ADD_USER':
      return {users: [...state.users, {username: action.user.username, hometown: action.user.hometown}]}
    default:
      return state
  }
}
