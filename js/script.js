wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"]

//console.log(wdi_16_names); //returns the whole object

/*for (var i = 0; i < wdi_16_names.length; i++) { 
    console.log(wdi_16_names[i]);
}
// the loop logs each string in the array
//notice the difference in what is logged
*/

/* var i = 0;
    function eachName(){
      console.log(wdi_16_names[i]);
      i ++; 
    }
    eachName();  */

/*//Math.floor and Math.random might be useful
var pick = Math.floor(Math.random() * wdi_16_names.length)
var namePicker = wdi_16_names[pick];
console.log(namePicker); */

function myFunction(){
	var namePicker = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
	console.log(namePicker);
	document.getElementById("name").innerHTML = namePicker;
}