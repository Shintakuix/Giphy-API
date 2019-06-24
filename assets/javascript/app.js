var topics = ["Iron Man","Captain America","Thor","Hulk","Black Widow","Hawkeye"];


for (i=0 ; i < topics.length ; i++) {
    var topicButton = $("<button>");
    var p = $("<p>").text(topics[i]);
    console.log(topics[i]);

    topicButton.attr("data-avenger", topics[i]);
    topicButton.attr("type", "button");
    topicButton.attr("class", "btn btn-primary butmargin");
    topicButton.prepend(p);
    $("#buttons").prepend(topicButton)
  }

  $("button").on("click", function() {
    /* console.log("works"); */
    $("#gifs-appear-here").empty();
    var avenger = $(this).attr("data-avenger");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      avenger + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    /* console.log(queryURL); */

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
      /*  console.log(response); */

        var results = response.data;
        for (var i = 0; i < results.length; i++) {           
    
        var p = $("<p>").text("rating: " + results[i].rating);
        
        var avengerImage = $("<img>");
  
        avengerImage.attr("src" , results[i].images.fixed_height_still.url);
        avengerImage.attr("class" , "gif");
        avengerImage.attr("style", "margin:10px");
        avengerImage.attr("data-still" , results[i].images.fixed_height_still.url);
        avengerImage.attr("data-animate" , results[i].images.fixed_height.url);
        avengerImage.attr("data-state" , "still");
        

        $(avengerImage).append(p);

        $("#gifs-appear-here").append(avengerImage);

        /* console.log(avengerImage[0]); */
        }
        $(".gif").on("click", function() {
  
          var state = $(this).attr("data-state");
          console.log(state);
        
          if (state == "still") {
              console.log($(this).attr("src"));        
              console.log($(this).attr("data-animate"));        
              $(this).attr("src" , $(this).attr("data-animate"));
              console.log($(this).attr("src"));
              $(this).attr("data-state" , "animate");  
              console.log($(this).attr("data-state"));
              }
        
            if (state == "animate") {
              console.log($(this).attr("data-state"));
                $(this).attr("src" , $(this).attr("data-still"));
                $(this).attr("data-state" , "still");
            }          
        });
    });
    
       
});

$("#search").on("click", function() {  
        
    keywords = $("#newAvenger").val();
     console.log(keywords);
     topics.push(keywords);  
     console.log(topics)  ;
     
     var topicButton = $("<button>");
     var p = $("<p>").text(keywords);
     
 
     topicButton.attr("data-avenger", keywords);
     topicButton.attr("type", "button");
     topicButton.attr("class", "btn btn-primary but margin");
     topicButton.prepend(p);
     $("#buttons").append(topicButton);

     $("button").on("click", function() {
      /* console.log("works"); */
      $("#gifs-appear-here").empty();
      var avenger = $(this).attr("data-avenger");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        avenger + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
      /* console.log(queryURL); */
  
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      
        /*  console.log(response); */
  
          var results = response.data;
          for (var i = 0; i < results.length; i++) {           
      
          var p = $("<p>").text("rating: " + results[i].rating);
          
          var avengerImage = $("<img>");
    
          avengerImage.attr("src" , results[i].images.fixed_height_still.url);
          avengerImage.attr("class" , "gif");
          avengerImage.attr("style", "margin:10px");
          avengerImage.attr("data-still" , results[i].images.fixed_height_still.url);
          avengerImage.attr("data-animate" , results[i].images.fixed_height.url);
          avengerImage.attr("data-state" , "still");
          
  
          $(avengerImage).append(p);
  
          $("#gifs-appear-here").append(avengerImage);
  
          /* console.log(avengerImage[0]); */
          }
          $(".gif").on("click", function() {
    
            var state = $(this).attr("data-state");
            console.log(state);
          
            if (state == "still") {
                console.log($(this).attr("src"));        
                console.log($(this).attr("data-animate"));        
                $(this).attr("src" , $(this).attr("data-animate"));
                console.log($(this).attr("src"));
                $(this).attr("data-state" , "animate");  
                console.log($(this).attr("data-state"));
                }
          
              if (state == "animate") {
                console.log($(this).attr("data-state"));
                  $(this).attr("src" , $(this).attr("data-still"));
                  $(this).attr("data-state" , "still");
              }          
          });
      });
      
         
  });


     
     
 })
 
 






