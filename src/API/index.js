export const BASE_URL = "https://strangers-things.herokuapp.com/api";
// export const COHORT_NAME = "2112-FTB-ET-WEB-PT"
// export const API_URL = BASE_URL + COHORT_NAME

// down here is where your API calls will go

export const getPosts = async () => {
  // URL that we're gonna reach out to
  const url = BASE_URL;
  // Grab the body given back by the API
  const response = await fetch(url);
  console.log(response);
  // Take the body we got back and convert it to JS Object
  const json = await response.json();
  console.log(json);
  return json;
};

export const createNewPost = async (newPost) => {
  const url = BASE_URL;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  const json = await response.json();
  console.log(json);
  return json;
};
export const updateNewPost = async (newPost) => {
  const url = BASE_URL + "/posts/";
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  const json = await response.json();
  console.log(json);
  return json;
};
export const deletePostById = async (postId) => {
  const url = BASE_URL + `/posts/${postId}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  const json = await response.json();
  console.log(json);
  return json;
};

// New Item

const hardCodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJjYmM2MjRiYWE0YzAwMTc4Y2E3NmIiLCJ1c2VybmFtZSI6IkJlbk9kaXNobyIsImlhdCI6MTY0NzA5ODk3OH0.LtAXxoKmxtK1_-jS5sr9UXtezvx6gPDAzgUHUokqKrs";

export const testAuthentication = async () => {
  // URL that we're gonna reach out to
  const url = `${BASE_URL}/api/2112-FTW-ET-WEB-PT/test/me`;
  const token = localStorage.getItem("stranger_things_JWT");

  // Grab the body given back by the API
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);

  // Take the body we got back and convert it to JS Object
  const json = await response.json();
  console.log(json);

  return json;
};

export const registerUser = async (userObject) => {
  // URL that we're gonna reach out to
  const url = `${BASE_URL} + /2112-FTW-ET-WEB-PT/users/register`;

  // Grab the body given back by the API
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

/**  
*/
