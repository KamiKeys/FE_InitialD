$(document).ready(function(){
    $("#go").click(function(){
        var username = $("#login").val().trim();
        var password = $("#password").val().trim();

        if( username != "" && password != "" ){
            $.ajax({
                url: 'https://localhost:44362/login',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({username:username,password:password}),
                success: function(data, status){
                    //alert("Data: " + data + "\nStatus: " + status);
                    if(data){ 
                        window.location.replace("/jefe?username="+username);
                    } else {
                        $("#error").css("display","block");
                    }
              }
            })
        }
    });
});