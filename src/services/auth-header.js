// helper function to retrieve data from server...
// resources are protected and need a authorization header
// protected routes check for valid JWT here and if present allow the user access to protected services.
const baseURL = "https://strangers-things.herokuapp.com/api";

export const authHeader = async () => {
  // URL that we're gonna reach out to
  const url = `${baseURL}/2112-FTB-ET-WEB-PT/test/me`;
  const token = localStorage.getItem("stranger_things_JWT");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);

  //Take the body we got back and convert it to JS Object
  const json = await response.json();
  console.log(json);

  return json;
};
