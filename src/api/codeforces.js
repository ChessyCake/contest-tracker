
async function getContestDetails() {
  const codeforcesResponse = await fetch("https://codeforces.com/api/contest.list");
  const codeforcesFetchJson = await codeforcesResponse.json();

  const upcoming = codeforcesFetchJson.result.filter(
    e => e.phase === "BEFORE"
  );

  upcoming.sort((a,b) => a.startTimeSeconds - b.startTimeSeconds)

  return upcoming;
}

export default getContestDetails;
