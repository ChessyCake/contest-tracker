/*eslint-disable no-unused-vars*/
import { useEffect } from "react";
import getContestDetails from "./api/codeforces";
function HomePage({children}){

    // const [data, getData] = useEffect([]);
    
   return( 
   <div className="flex justify-center items-center min-h-screen">
            {children}
            <div className="bg-amber-200"> <h1> </h1></div>
    </div>
    )
}

export default HomePage;