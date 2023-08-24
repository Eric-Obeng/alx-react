import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const boundLogin = (email, password) => dispatch(login(email, password));


const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const boundLogout = () => dispatch(logout());

const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};


export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export { login, logout, displayNotificationDrawer, hideNotificationDrawer };
