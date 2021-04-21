
const Contact = () => {
    return `
	<div id="data-router">
	<img class="wave" src="img/wave.png" alt="back">
	<div class="container">
		<div class="img">
			<img src="img/finance.svg" alt="logo">
		</div>
		<div class="login-content">
			<form method="POST" id="form" name="formulario" method="POST" action="https://banciss-api.herokuapp.com/api/auth/signin">
				<img src="img/ban.png">
				<h2 class="title">Bienvenido</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input name="email" type="email" class="input">
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Contraseña</h5>
           		    	<input name="password" type="password" class="input">
            	   </div>
            	</div>
            	<a href="#">Olvidaste tu contaseña?</a>
            	<input name="submit" type="submit" class="btn" value="Login">
            </form>
        </div>
    </div>
	<div id="elem">
    <script type="text/javascript" src="js/main.js"></script>
    </div>
	</div>
`;
}
