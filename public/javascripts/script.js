$(document).ready(function() {
    $(".submit").on("click", function() {
                    
        var newFriend = {
            name: $('#name').val().trim(),
            image_URL: $('#photo').val().trim(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val(),
        };

        console.log(newFriend);
            
        var currentURL = window.location.origin;
    
        $.post(currentURL + "/api/friends", newFriend, function(data) {
            
            $("#matchName").text(data.name);
            $("#matchPic").attr("src", data.image_URL);
        });
        
});