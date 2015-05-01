var wdi_16_names = [];

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
//function randomTwice(){

	function randomName(){

		if (wdi_16_names.length <1) {
			wdi_16_names = [{name: "Alexander Mireles", pic: "http://blog.africadreamsafaris.com/wp-content/uploads/2011/09/Giraffe-Sparring.jpg"}, 
							{name: "Andre Trelles", pic:"http://funmozar.com/wp-content/uploads/2015/02/Monkey-36.jpg"}, 
							{name:"Andrew Ham", pic: "http://funmozar.com/wp-content/uploads/2015/02/Monkey-32.jpg"}];
			/* "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", 
			"Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi",
			 "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran",
			  "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", 
			  "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", 
			  "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"] */
		}
		var pick = Math.floor(Math.random() * wdi_16_names.length)
	    var namePicker = wdi_16_names[pick].name;
	    var picPicker = wdi_16_names[pick].pic;
	    document.getElementById('displayName').innerHTML = namePicker;
	    document.getElementById('randomPicture').style.backgroundImage= 'url(' + picPicker + ')';
	    wdi_16_names.splice(pick,1);  
	    console.log(namePicker);

	}

//}

