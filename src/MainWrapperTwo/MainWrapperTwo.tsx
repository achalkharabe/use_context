import { useContext } from "react";
import { authContext, myContext } from "../App";

const MainWrapperTwo =()=>{
    const isContaxt =useContext(authContext);
    return(
        <div>
            test
            <p>islogin loaded{isContaxt.islogin? <span>is true</span>: <span>is false</span> }</p>
        </div>
    )
}
export default MainWrapperTwo;