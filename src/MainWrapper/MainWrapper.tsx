import { useContext } from "react";
import { myContext } from "../App";

const MainWrapper =()=>{
    const userContext = useContext(myContext);
    return(
        <div>
            test
            <p>main wrapper name{userContext.name}</p>
        </div>
    )
}
export default MainWrapper;