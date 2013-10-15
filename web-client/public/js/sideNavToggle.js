$(function(){
  var sideNavShown = true;
  $("#side-nav-toggle").hover(
      function(){
        $("#side-nav-toggle").animate({"width": "25px"}, 200);
        if(sideNavShown){
          $("#toggle-caret").text("◀");
        }else{
          $("#toggle-caret").text("▶");          
        }
      },
      function(){
        $("#side-nav-toggle").animate({"width": "7px"},600);
        $("#toggle-caret").text("");
      });

  $("#side-nav-toggle").click(function(){
    if(sideNavShown){              
      $("#side-nav").animate({"width": "hide"});
      $("#side-nav-toggle").animate({"width": "7px"});
      $("#toggle-caret").text("");
      sideNavShown = false;
    } else {
      $("#side-nav").animate({"width": "show"});
      $("#side-nav-toggle").animate({"width": "7px"});
      $("#toggle-caret").text("");
      sideNavShown = true;
    }
    
  });
});