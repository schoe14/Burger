$(function () {
    $(".change-devour").on("click", function (event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        };

        console.log("new devourState: " + newDevourState); // test

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour); // test
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function (event) {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log("deleted: ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log($(this)); // test
        const newHamburger = {
            burger_name: $("#burger_name").val().trim(),
            // devoured: $("[name=devoured]:checked").val().trim()
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newHamburger
        }).then(
            function () {
                console.log("created new hamburger"); // test
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});