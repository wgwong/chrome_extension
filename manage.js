$(document).ready(function() {
    function load_fcdata () {
        var temp2 = localStorage.getItem("flashcards");
        var temp3 = JSON.parse(temp2);
        var size = temp3.length;
        var count = 0;
        while (count < size) {
            var countstring = count.toString();
            $("#myTable").find('tbody').append($('<tr>')
                .append($('<td id=front_' + count + '>')
                    .text(temp3[count].front))
                .append($('<td id=back_' + count + '>')
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
                location.reload();
            });
            $("#edit_"+count).click( function() {

                var buttontext = ($(this).html());

                if (buttontext === "Edit") {
                    var str3 = this.id;
                    var str4 = str3.replace ( /[^\d.]/g, '' );
                    var value = parseInt(str4, 10);

                    $("#front_" + value).replaceWith("<input type='text' id='newfront_" + value + "' value='" + temp3[value].front + "'>");
                    $("#back_" + value).replaceWith("<td><input type='text' id='newback_" + value + "' value='" + temp3[value].back + "'></td>");
                    $("#edit_" + value).html('Save');

                    localStorage.setItem("flashcards", JSON.stringify(temp3));
                }
                else if (buttontext === "Save") {
                    var str3 = this.id;
                    var str4 = str3.replace ( /[^\d.]/g, '' );
                    var value = parseInt(str4, 10);

                    console.log($("#newfront_" + value).val());

                    temp3[value].front = $("#newfront_" + value).val();
                    temp3[value].back = $("#newback_" + value).val();

                    localStorage.setItem("flashcards", JSON.stringify(temp3));

                    $("#edit_" + value).html('Edit');
                    location.reload();
                }
            });

            count = count + 1;
        }
    }

    load_fcdata();

  	$("#clear_button").click( function() {
	localStorage.clear();
	});
 });


