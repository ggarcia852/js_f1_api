


// async function getSeason(raceSeason){
//     let response = await fetch(`https://ergast.com/api/f1/${raceSeason}.json`)
//     let data = response.json()
//     return data
// }

// getSeason(2012).then(data => console.log(data))


// fetch('https://ergast.com/api/f1/2002.json')
//     .then((response)=> {
//     console.log('resolved', response);
//     return response.json();
// })




const getRace = async function(raceSeason, raceRound){
    let response = await fetch(`https://ergast.com/api/f1/${raceSeason}/${raceRound}.json`)
    let data = response.json()
    return data
}


const raceForm = document.getElementById('raceForm');

raceForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
   
    let raceSeason = e.target.raceSeason.value;
    let raceRound = e.target.raceRound.value;
    let raceSeasonRound = await getRace(raceSeason, raceRound);


    let newParagraph1 = document.createElement('p1');
    newParagraph1.innerHTML = `Season: ${raceSeasonRound.MRData.RaceTable.season} <br>`
   
    let newParagraph2 = document.createElement('p1');
    newParagraph2.innerHTML = `Round: ${raceSeasonRound.MRData.RaceTable.round} <br>`
    
    let newParagraph3 = document.createElement('p1');
    newParagraph3.innerHTML = `Race Name: ${raceSeasonRound.MRData.RaceTable.Races[0].raceName} <br>`
    
    let newParagraph4 = document.createElement('p1');
    newParagraph4.innerHTML = `Circuit Name: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.circuitName} <br>`
    
    let newParagraph5 = document.createElement('p1');
    newParagraph5.innerHTML = `City: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.locality} <br>`

    let newParagraph6 = document.createElement('p1');
    newParagraph6.innerHTML = `Country: ${raceSeasonRound.MRData.RaceTable.Races[0].Circuit.Location.country} <br>`

    let newParagraph7 = document.createElement('p1');
    newParagraph7.innerHTML = `Date: ${raceSeasonRound.MRData.RaceTable.Races[0].date} <br><br>`
    
    
    document.body.append(newParagraph1);
    document.body.append(newParagraph2);
    document.body.append(newParagraph3);
    document.body.append(newParagraph4);
    document.body.append(newParagraph5);
    document.body.append(newParagraph6);
    document.body.append(newParagraph7);
})


