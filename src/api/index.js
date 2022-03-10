export const getPosts = async () => {
  // URL that we're gonna reach out to

  const url =
    "https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts";

  // Grab the body given back by the API
  const response = await fetch(url);
  console.log(response);

  //Take the body we got back and convert it to JS Object
  const json = await response.json();
  console.log(json);
  return json;
};
