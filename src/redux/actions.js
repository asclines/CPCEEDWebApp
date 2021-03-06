// action types

export const AuthActionTypes = {
  GUEST: 'SET_AUTH_GUEST',
  STUDENT: 'SET_AUTH_STUDENT',
  COORDINATOR: 'SET_AUTH_COORDINATOR'
};

/*
  Auth.js sets the database values for role, so AuthStates should be kept
  in sync with it.
*/
export const AuthStates = {
  GUEST: 'guest',
  STUDENT: 'student',
  COORDINATOR: 'admin'
};

/*
  This defines permissions for each user type. If you need to define new
  permissions, you must add them as a comma separated key-value pair to
  each of the user types in PermissionStates.
*/
export const PermissionStates = {
  GUEST: {
    viewActivity: false
  },
  STUDENT: {
    viewActivity: true
  },
  COORDINATOR: {
    viewActivity: true
  }
};

// action creators

export const setAuthState = (authState) => {
  switch(authState) {
    case AuthStates.GUEST:
      return {
        type: AuthActionTypes.GUEST
      };
    case AuthStates.STUDENT:
      return {
        type: AuthActionTypes.STUDENT
      };
    case AuthStates.COORDINATOR:
      return {
        type: AuthActionTypes.COORDINATOR
      };
    default:
      return {
        type: AuthActionTypes.GUEST
      };
  };
};
