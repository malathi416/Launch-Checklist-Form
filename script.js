// Write your JavaScript code here!
window.addEventListener("load",function(){
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
      let PilotName = document.querySelector("input[name=pilotName]");
      let CopilotName = document.querySelector("input[name=copilotName]");
      let FuelLevel = document.querySelector("input[name=fuelLevel]");
      let CargoMass = document.querySelector("input[name=cargoMass]");
      let preventDefault = false;
      if (PilotName.value === "" || CopilotName.value === "" || FuelLevel.value === "" || CargoMass.value === "") {
         alert("All fields are required!");
         preventDefault = true;
         return;
      }else if(!isNaN(PilotName.value)|| !isNaN(CopilotName.value) || isNaN(FuelLevel.value) || isNaN(CargoMass.value)){
         alert("Make sure to enter a valid information for each field");
         preventDefault = true;
        return;
      }else if(!isNaN(PilotName.value)){
          alert("Enter a Pilot Name")
          preventDefault = true;
          return;
       } else if(!isNaN(CopilotName.value)){
         alert("Enter a Copilot Name");
         preventDefault = true;
         return;
      }else if(isNaN(FuelLevel.value)){
         alert("Enter a FuelLevel as Number");
         preventDefault = true;
         return;
      }else if(isNaN(CargoMass.value)){
         alert("Enter a CargoMass as Number");
         preventDefault = true;
         return;
      }
      
      if(FuelLevel.value< 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `${PilotName.value} is ready`;
         document.getElementById("copilotStatus").innerHTML =`${CopilotName.value} is ready`;        
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color="red";
         document.getElementById("fuelStatus").innerHTML="There is not enough fuel for the journey";
         // document.getElementById("cargoStatus").innerHTML="there is not enough fuel for the journey";
         // TODO: Change color to Red
         preventDefault = true;
      }else if(CargoMass.value>10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `${PilotName.value} is ready`;
         document.getElementById("copilotStatus").innerHTML =`${CopilotName.value} is ready`;        
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color="red";
         document.getElementById("cargoStatus").innerHTML="There is too much mass for the shuttle to take off";
         
         // TODO: Change color to Red             
         preventDefault = true;
      }else {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `${PilotName.value} is ready`;
         document.getElementById("copilotStatus").innerHTML =`${CopilotName.value} is ready`;        
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color="green";
         preventDefault = true;
      }
      if(preventDefault) {
         event.preventDefault();
      }
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            // console.log(json)
            let i = Math.floor(Math.random()*json.length);
            let div=document.getElementById("missionTarget");
            // document.getElementById("missionTarget").innerHTML="Mission Destination"
            div.innerHTML=`
            
            <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[i].name}</li>
   <li>Diameter: ${json[i].diameter}</li>
   <li>Star: ${json[i].star}</li>
   <li>Distance from Earth: ${json[i].distance}</li>
   <li>Number of Moons: ${json[i].moons}</li>
</ol>
<img src="${json[i].image}"/>
`

         });
         })
   });

   });

   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${}</li>
      <li>Diameter: ${}</li>
      <li>Star: ${}</li>
      <li>Distance from Earth: ${}</li>
      <li>Number of Moons: ${}</li>
   </ol>
   <img src="${}"/>
   */