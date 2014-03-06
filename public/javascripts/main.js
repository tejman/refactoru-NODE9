$(function(){

  var loadToLang = function(){

    $.ajax("/populateToLng/"+$("#from-lng").val().toString(), {success: function(data){

      $("#to-lng").empty();

      for (var i = 0; i < data.length; i++) {
        $("#to-lng").append("<option>"+data[i]+"</option>")
      };
    }});
  };

  var translateWord = function(){
    

  };


/****************
      MAIN
*****************/
  loadToLang();

  $("#from-lng").change(function(){
    loadToLang();
  });

  $("#translateForm").submit(function(e){
    e.preventDefault();

  })






});