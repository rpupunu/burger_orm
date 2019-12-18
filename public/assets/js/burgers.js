// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      console.log('This is the devoured state'+ newDevoured);
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // RELOAD THE PAGE TO GET THE UPDATED LIST
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var x = $("#burg").val();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 1
      };

      console.log("x = " + x);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger on submit via POST ajax /api/burgers");
          // RELOAD THE PAGE TO GET THE UPDATED LIST
          location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger via onClick api/burgers", id);
                // RELOAD THE PAGE TO GET THE UPDATED LIST
                location.reload();
            }
        );
    });
  });