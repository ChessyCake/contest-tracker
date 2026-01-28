/*eslint-disable no-unused-vars*/
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
   <div className="flex flex-wrap justify-center items-center gap-4">
        {data.map( d => (
            <Card key={d.id} contest = {d} />
        ))}

        <div className="footer bottom-0 bg-black w-screen text-white flex justify-center items-end text-7xl">
              <h3 className="mb-5"> CONTEST TRACKER</h3>
        </div>
    </div>

    )
}

export default HomePage;