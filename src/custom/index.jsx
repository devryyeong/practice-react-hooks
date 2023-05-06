import { useState,useEffect  } from "react";
import { Div, Input, Button, P, Span } from "../styles";
import { useInput } from "./useInput";
import { useFetch } from "./useFetch";

const displayMessage = (message) => {
  alert(message);
};

const baseUrl = "https://jsonplaceholder.typicode.com";

const Index = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  const { data, fetchUrl } = useFetch(baseUrl, "users");

  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <>
      <Div>useInput</Div>
      <Input value={inputValue} onChange={handleChange} />
      <Button onClick={handleSubmit}>OK</Button>
      <hr style={{ marginBottom: "30px" }} />
      <Div>useFetch</Div>
      <Button onClick={() => fetchUrl("users")}>Users</Button>
      <Button onClick={() => fetchUrl("posts")}>Posts</Button>
      <Button onClick={() => fetchUrl("todos")}>Todos</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <P style={{ backgroundColor: "blue" }}>User</P> */}
      {/* {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>} */}
      {/* <P>Post</P> */}
      {/* {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>} */}
    </>
  );
};

export default Index;
