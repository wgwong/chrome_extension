$(document).ready(function() {
    var temp2 = localStorage.getItem("flashcards");
    var temp3 = JSON.parse(temp2);
    var size = temp3.length;
    var count = 0;
    while (count < size) {
    	var countstring = count.toString();
    	$("#myTable").find('tbody').append($('<tr>')
    		.append($('<td>')
    			.text(temp3[count].front))
    		.append($('<td>')
    			.text(temp3[count].back))
    		.append($('<td>')
    			.append($('<button id = "edit_'+count+'">')
    				.text("Edit")))
    		.append($('<td>')
    			.append($('<button id = "delete_'+count+'">')
    				.text("Delete")))
    		);
    	$("#delete_"+count).click( function() {
    		var str = this.id;
    		var str2 = str.replace ( /[^\d.]/g, '' );
    		var value = parseInt(str2, 10);
    		var temp4 = temp3.splice(value,1);
    		localStorage.setItem("flashcards", JSON.stringify(temp3));
    	});
    	$("#edit_"+count).click( function() {
    		var str3 = this.id;
    		var str4 = str.replace ( /[^\d.]/g, '' );
    		var value = parseInt(str4, 10);
    		var temp4 = temp3.splice(value,1);
    		localStorage.setItem("flashcards", JSON.stringify(temp3));
    	});

    	count = count + 1;
  	}

  	$("#clear_button").click( function() {
	localStorage.clear();
	});
 });


