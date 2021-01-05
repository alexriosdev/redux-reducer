// let state = {
//   friends: [],
// };

// let action = {
//   type: "ADD_FRIEND",
//   friend: {
//     id: 1,
//     name: "Chrome Boi",
//     hometown: "NYC",
//   },
// };

// action = {
//   type: "REMOVE_FRIEND",
//   id: 1,
// };

export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.id),
      };
    default:
      return state;
  }
}
