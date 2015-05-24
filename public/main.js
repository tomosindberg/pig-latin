$( '#pigButton' ).on( 'click', function(){
console.log("hello Pig");
	var request = {
		text: $( '#toTranslate' ).val(),
	};

	$.post( 'translate', request, function(response) {
		$("#translated").text( response.piglatin );
    });
	return false;
});

$( '#swedButton' ).on( 'click', function(){
  console.log("hello Swedish-button");
  var request = {
    text: $( '#toTranslate' ).val(),
  };

  $.post( 'swed', request, function(response) {
    $("#swedish-text").text( response.swedish );
    });
  return false;
});