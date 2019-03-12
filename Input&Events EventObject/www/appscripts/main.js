require(
        [],
        function () {

        	console.log("welcome to my event object homework journey");

        	var colorbox = document.getElementById("colorDisplay");

        	colorbox.addEventListener("mousedown", function(ev){ 
        		console.log("okay, got a mousedown event");
        		console.log("the target is " + ev.target);
        		console.log("the target's ID is " + ev.target.id);

        		ev.target.innerHTML = "The mouse's offset X was " + ev.offsetX + " and the offset Y was " + ev.offsetY ; 

                        })
        	

        }


);