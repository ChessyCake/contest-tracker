
async function getContestDetails() {
    const cfResponse = await fetch('https://codeforces.com/api/contest.list');
    const cfResponseJson = await cfResponse.json();

    const upcomingContesttArray = cfResponseJson.result.filter( (e) => {
       return e.phase === "BEFORE"
    })
    console.log(upcomingContesttArray);
    
}

getContestDetails();