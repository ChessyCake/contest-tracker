
import { useEffect, useState } from "react";
import getContestDetails from "./api/codeforces";
import Card from "./Card";
function HomePage(){

    const [data, setData] = useState([]);

    useEffect( ()=>{
        async function load() {
             const contest = await getContestDetails();
             setData(contest);
        }

        load();
    }, [])
    
   return( 
   <div>
    <div className="header w-full h-20 bg-black text-white flex justify-center items-center text-3xl">
         <h1 className="text-red-400">REMEMBER:</h1>  <h1>Its always YOU' v/s YOU'</h1>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-4">
        {data.map( d => (
            <Card key={d.id} contest = {d} />
        ))}

        <div className="footer bottom-0 bg-black w-screen text-white flex justify-center items-end flex-row">
              <h3 className="mb-3 text-7xl"> CONTEST TRACKER</h3>
              <p className="text-right">&copy;{new Date().getFullYear()} Harsh Raj Minj</p>
        </div>
     </div>
    </div>

    )
}

export default HomePage;