function Card(){
return (


<div className="card-wrapper absolute">
      <div className="platform-name text-xl z-30 translate-y-10 inline-block bg-black text-white rounded-xl p-2 shadow-lg shadow-blue-500/20">
        <h1>codeforces</h1>
      </div>
    <div className="card flex justify-between items-center flex-col shadow-xl  shadow-blue-500/30 rounded-2xl relative">
    <div className="platform flex flex-col justify-center items-center mt-20">

         <div className="contest-difficulty text-7xl">
            <h1>DIV - 3</h1>
         </div>
    </div>
    <div className="info flex justify-center items-center flex-col w-full m-10">
    <div className="happening-date bg-green-300 text-center w-full h-12 flex items-center justify-center">
        <h1 className="text-3xl">01/01/1970</h1>
    </div>
    <div className="time-left bg-amber-300 text-center w-full h-12 flex items-center justify-center ">
        <h1 className="text-3xl">00:00:00</h1>
    </div>
    <button className="btn bg-black text-white p-1 rounded-xl text-2xl m-2 relative z-20 translate-x-30 cursor-pointer">GO</button>
    </div>
    </div >
</div>
)
}

export default Card;