


let mercData = "Mercury 0.330 4,879 5427 3.7 4222.6 57.9 167 0".split(' ');
mercData.push("Closest to the Sun");
let venusData = "Venus 4.87 12,104 5243 8.9 2802.0 108.2 464 0".split(' ')
let earthData = "Earth 5.97 12,756 5514 9.8 24.0 149.6 15 1".split(' ');
earthData.push("Our world")
let marsData = "Mars 0.642 6,792 3933 3.7 24.7 227.9 -65 2".split(' ');
marsData.push("The red planet")
let jupiterData = "Jupiter 1898 142,984 1326 23.1 9.9 778.6 -110 67".split(' ');
jupiterData.push("The largest planet")
let saturnData = "Saturn 568 120,536 687 9.0 10.7 1433.5 -140 62".split(' ')
saturnData.push(' ')
let uranusData = "Uranus 86.8 51,118 1271 8.7 17.2 2872.5 -195 27".split(' ')
uranusData.push(' ')
let neptuneData = "Neptune 102 49,528 1638 11.0 16.1 4495.1 -200 14".split(' ')
neptuneData.push(' ')
let plutoData = "Pluto 0.0146 2,370 2095 0.7 153.3 5906.4 -225 5".split(' ') 
plutoData.push("Declassified as a planet in 2006, but this <a href='http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/'>remains controversial</a>.")
let data = [
  mercData,
  venusData,
  earthData,
  marsData,
  jupiterData,
  saturnData,
  uranusData,
  neptuneData,
  plutoData
]
function populateRow(rowData){
  rowData.forEach(dataPoint => {
    const parent = document.getElementById(rowData[0].toLowerCase())
    if (dataPoint === rowData[0]){
      let th = document.createElement("th");
      th.textContent = dataPoint;
      parent.appendChild(th)
    } else {
      let td = document.createElement("td");
      td.innerHTML
       = dataPoint;
      parent.appendChild(td)
    }
    console.log(rowData, dataPoint)
  })
}
data.forEach(planet => {
  populateRow(planet)
})