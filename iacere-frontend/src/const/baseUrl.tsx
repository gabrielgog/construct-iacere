export const BaseUrl = "http://192.168.0.171:8080/users";

export const LOGIN_QUERY = `
query{

  users{users{id, firstName, lastName, phoneNumber,password,role}}
}
`;
