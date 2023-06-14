import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainWrapper from "./MainWrapper/MainWrapper";
import MainWrapperTwo from "./MainWrapperTwo/MainWrapperTwo";

export const myContext = createContext({
  name: "  test",
  id: 0,
});

export const authContext = createContext({
  islogin: false,


});

function App() {
  const initialValue = {
    name: "achal",
    id: 1,
  };
  const userContext = useContext(myContext);
  const isContaxt = useContext(authContext);
  const [loginstate, setLoginstate] = useState(false);
  const content = (
    <p>
      islogin {isContaxt.islogin ? <span>is true</span> : <span>is false</span>}
    </p>
  );
  return (
    <authContext.Provider value={{ islogin: loginstate}}>
      <myContext.Provider value={initialValue}>
        <div>
          <p>usercontext name{userContext.name}</p>
          {content}
          
          <br></br>
          <br></br>
          <MainWrapper></MainWrapper>
          <MainWrapperTwo></MainWrapperTwo>
          <button type="button" >submit</button>
        </div>
      </myContext.Provider>
    </authContext.Provider>
  );
}

export default App;
