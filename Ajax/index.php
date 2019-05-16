
<!-- Something is wrong with the XAMPP installation :-( -->
<!DOCTYPE html>
<html>
<head>
<style>
html {
	font-family: Geneva,Tahoma,Verdana,sans-serif; ;


}

h1 {
    margin-top: 50px;
    color: blue;
    font-size: 17px;
	
    line-height: 1.5em;
}

body {
	font-size: 17px;
	line-height: 2em;
	text-shadow: 2px 0 #888888;
		
			
}

form {
   
    display: inline-block;
}

div.center {
    margin-top: 10%;
    padding: 50px;
    align-self: center;
    text-align: center;
    background-color: grey;
    margin-left: 450px;
    margin-right: 450px;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.16), 0 1px 30px rgba(0, 0, 0, 0.30);
    min-width: 450px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;


}
.btn {
	
	margin-top: 10px;
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

#msg{
	margin-top: 10px;
	font-size: 10;
	color: green;
}

</style>


<title>Sign In</title>
</head>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>


<body>
    <div class='center'>

        <form id='frm' method='POST' >

		<label>Username:</br></Label>
		<input type="text" length=150 id='username' name='username'></br>
	
		Password:   </br>
		<input type="text" length=150 id='password' name='password'></br>
		Retype Password: </br>
		<input type="text" length=150 id='repeat_password'></br>
		
		
        <input class='btn' id='frmbtn' type='submit' >
		
    
		</form>
		<div id='msg'></div>

	</div>








	<script>


	$(document).ready(function(){
		$("#frm").submit(function(e){
			e.preventDefault();

	var username = $("#username").val();
	var password = $("#password").val();
	var repeat_password = $("#repeat_password").val();
     $("#msg").load("form.php",{

		username: username,
		password: password


			 })
		})
	})

// $(document).on('change', 'input', function() {
// 	var username = $("#username").val();
// 	console.log(username);
// 	if(username.includes("@")){
// 		console.log('hi');
// 		$("#frmbtn").removeAttr("disabled");
// 	}else{
// 		console.log('bye');
// 		$("#frmbtn").attr("disabled", "disabled");
// 	}
// });
		


// $("#frm").submit(function(e) {

// 	e.preventDefault()

// 	var username = $("#username").val();
// 	var password = $("#password").val();
// 	var repeat_password = $("#repeat_password").val();

// 	if(password==repeat_password && username=='hr@auphansoftware.com' && password=='hello'){

// 	var msg = document.getElementById("msg");
// 	var textNode = document.createTextNode("Login Successful ");
// 	msg.appendChild(textNode)

// 	} else {

// 	var msg = document.getElementById("msg");
// 	var textNode = document.createTextNode("Incorrect Username/Password ");
// 	msg.appendChild(textNode)
// 	}


// $.ajax({
// 	   type: "POST",
// 	   url: ,
// 	   data: form.serialize(),
// 	   success: function(data)
// 	   {
// 		   alert(data);
// 	   }
// 	 });


// });







</script>


</body>
</html>



