$(function () {
    // If no data through GET request, display placeholder div
    console.log(!$.trim($('#left').html()).length); // test
    if (!$.trim($('#left').html()).length) {
        $("#placeholder1").css("display", "block");
    }
    console.log(!$.trim($('.text-muted').html()).length); // test
    if (!$.trim($('.text-muted').html()).length) {
        $("#placeholder2").css("display", "block");
    }

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
        // Make sure to preventDefault on a submit event
        event.preventDefault();

        console.log($(this)); // test
        let value = $("#burger_name").val().trim();

        // Capitalize the first letter of each word from user input
        if (value.includes(" ")) {
            value = value.split(" ").map(function (val) { return val.charAt(0).toUpperCase() + val.substring(1); }).join(" ");
        } else { value = value.charAt(0).toUpperCase() + value.substring(1); }

        const newHamburger = {
            burger_name: value,
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