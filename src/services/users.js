import http from "./http-commons";

export const createUserService = (data) => {
  return http.post('/users/create', data);
};

export const getAllUsersService = () => {
  return http.get('/users');
};

