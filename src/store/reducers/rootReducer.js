const initState = {
  users: [
    {
      id: "1",
      name: "Nghiêm Hồng",
    },
    {
      id: "2",
      name: "Văn Nam",
    },
    {
      id: "3",
      name: "Văn Sơn",
    },
  ],

  course: [],
};

const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case "Delete_User":
      //console.log("Delete_user", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users: users,
      };
    case "Add_New_User":
      let id = state.users.length + 1;

      let user = { id: `${id}`, name: "Hong - add" };

      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default RootReducer;
