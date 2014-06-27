$(document).ready(function(){
	$(".ringTwo").click(function(e){

		var target = $(e.target);
	});

	$('#popupBoxClose').click( function() {
		unloadPopupBox();
	});

	$("tr").not(':first').hover(
		function () {
			$(this).css("background","yellow");
		},
		function () {
			$(this).css("background","");
		}
	);
});

function showNewPlayer(){
	loadPopupBox();
}

function registerNewPlayer(){
	var playerName = $("#name").val();
	$('.gridtable').append('<tr><td>' + playerName + '</td><td>1</td><td>0</td></tr>');
}

function unloadPopupBox() {    // TO Unload the Popupbox
    $('#popup_box').fadeOut("slow");
    $("#container").css({ // this is just for style        
            "opacity": "1"
    });
}
    
function loadPopupBox() {    // To Load the Popupbox
    $('#popup_box').fadeIn("slow");
    $("#container").css({ // this is just for style
        "opacity": "0.3"
    });
}

