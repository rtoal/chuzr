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
      $("#main-content").animate({"margin-left":"1.75%", "width": "95%"})
      sideNavShown = false;
    } else {
      $("#side-nav").animate({"width": "show"});
      $("#side-nav-toggle").animate({"width": "7px"});
      $("#toggle-caret").text("");
      $("#main-content").animate({"margin-left":"17%", "width": "82%"})
      sideNavShown = true;
    }
  });

  $("#social-tab").hover(function(){
    $(".social-nav").animate("display":"show")});
  });
});