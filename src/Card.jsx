import { useEffect, useState } from "react";

function Card( {contest}){

    function getDate(){
        const fetchedDate = new Date( contest.startTimeSeconds * 1000);
           const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
           const month = months[fetchedDate.getMonth()];
           const date = fetchedDate.getDate();
           const year = fetchedDate.getFullYear();
           let displayDate = `${date} ${month} ${year}`; 
           return displayDate;
    }

    function contestLink(){
        window.open(`https://codeforces.com/contests/${contest.id}`, "_blank");
    }

   const [timer, setTimer] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        const currentTime = Date.now();
        const leftTime = contest.startTimeSeconds * 1000 - currentTime;

        const days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
    
        setTimer(`${days > 0 ? `${days} Days` : ""} ${hours}hour ${minutes}min ${seconds}s`)
    }, 1000);

    return () => clearInterval(interval);
    }, [contest.startTimeSeconds]);

   

    return (


<div className="card-wrapper">
      <div className="platform-name text-xl z-30 translate-y-10 inline-block bg-black text-white rounded-xl p-2 shadow-lg shadow-blue-500/20">
        <h1>codeforces</h1>
      </div>
    <div className="card flex justify-between items-center flex-col border-black border-2 rounded-2xl shadow-lg shadow-blue-500/40">
    <div className="platform flex flex-col justify-center items-center mt-20">

         <div className="contest-difficulty text-3xl p-1">
            <h1>{contest.name}</h1>
         </div>
    </div>
    <div className="info flex justify-center items-center flex-col w-full m-10">
    <div className="happening-date text-lime-500 text-center w-full h-12 flex items-center justify-center">
        <h1 className="text-2xl">{ getDate() }</h1>
    </div>
    <div className="time-left text-red-500 text-center w-full h-12 flex items-center justify-center ">
        <h1 className="text-2xl">{timer}</h1>
    </div>
    <button className="btn bg-black text-white p-1 rounded-xl text-2xl m-2 relative z-20 translate-x-30 cursor-pointer" onClick={ contestLink}>  GO </button>
    </div>
    </div >
</div>
)
}

export default Card;