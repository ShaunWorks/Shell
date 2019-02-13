let pass = "6813";

$("#sign-in").on("click", function(event) {
    event.preventDefault();
    let inputtedPass = $("#password").val();
    if(inputtedPass === pass) {
        $("#intro-card").addClass("fadeOut")
        setTimeout(function(){
            window.location.href = "main-page.html";
        }, 1500)
    }
    $("#password").val("");
});

