const listek = 12
let  prijem = listek * 174 * 15

document.body.innerHTML +=  "<p>" + "Příjem divadla: " + prijem + " Kč" + "</p>"

const studenti = 0.4 * 174
const listek65 = listek * 0.65
 
let prijem2 = 0.60 * prijem + studenti * listek65 *15

document.body.innerHTML +=  "Příjem divadla se studenty: " + prijem2 + " Kč" + "</p>"

