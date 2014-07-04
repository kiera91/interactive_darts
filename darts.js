var currentGo = null;
var currentShots = 0;

$(document).ready(function(){
	$(".ringTwo").click(function(e){
		var target = $(e.target);
		segment = target[0].offsetParent.className;
		updatePlayerScore(segment);
	});

	$(".ringFive").click(function(e){
		updatePlayerScore("outer bullseye");
	});

	$(".ringSix").click(function(e){
		updatePlayerScore("bullseye");
	});

	$('#popupBoxClose').click( function() {
		unloadPopupBox();
	});


	$('body').on('click', '#test tr', function(){
		$(this).css("background","yellow");
		currentGo = this;
	});

});

function showNewPlayer()
{
	loadPopupBox();
}

function registerNewPlayer()
{
	var playerName = $("#name").val();
	$('.gridtable').append('<tr><td>' + playerName + '</td><td class="current_target">1</td><td class="go_number">0</td></tr>');
}

function unloadPopupBox()
{
    $('#popup_box').fadeOut("slow");
    $("#container").css({
		"opacity": "1"
    });
}
    
function loadPopupBox()
{
    $('#popup_box').fadeIn("slow");
    $("#container").css({
        "opacity": "0.3"
    });
}

function updatePlayerScore(segment)
{
	if(currentGo === null)
	{
		alert("Please select a player");
	}
	else
	{
		var aiming_for = $(currentGo).find(".current_target").html();
		if(aiming_for == segment.substring(1)){
			$(currentGo).find(".current_target").html(parseInt(string, aiming_for) + 1);
		}
		currentShots += 1;
		if(currentShots == 3)
		{
			var currentGoNumber = $(currentGo).find(".go_number").html();
			$(currentGo).find(".go_number").html(parseInt(string, currentGoNumber) + 1);
			currentShots = 0;
			$(currentGo).css("background","none");
			currentGo = null;
		}
	}
}