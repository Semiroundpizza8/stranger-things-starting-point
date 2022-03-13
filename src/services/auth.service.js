//authentication service
//register, login, logout helper functions
//use HTTP request

const baseURL = "https://strangers-things.herokuapp.com/api";

export const registerUser = async (userObject) => {
  //URL that we reach out to
  const url = `${baseURL}/2112-FTB-ET-WEB-PT/users/register`;

  //grab body given back by the API

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  console.log(response);

  // Take the body we got back and convert it to JS Object
  const json = await response.json();
  console.log(json);

  // TOKEN : json.data.token
  localStorage.setItem("stranger_things_JWT", json.data.token);

  return json;
};

export const login = async (userObject) => {
  const url = `${baseURL}/2112-FTB-ET-WEB-PT/users/login`;

  const response = await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  console.log(response);

  const json = await response.json();
  console.log(json);

  localStorage.setItem("stranger_things_JWT", json.data.token);

  return json;
};

export const logout = async () => {
  await localStorage.removeItem("stranger_things_JWT");
};
