import React from 'react';
import '../Pages/Sign.css';

function SignPage() {
  return (
    <body>
        <div class="e62_22">
            <div class="e65_6"></div>
        </div>
        <div class="form-box">
            <form class="form">
            <span class="title">Registrate</span>
            <span class="subtitle">Crea una cuenta gratuita con tu correo</span>
        <div class="form-container">
        <input type="text" class="input" placeholder="Nombre Completo"></input>
			<input type="email" class="input" placeholder="Correo"></input>
			<input type="password" class="input" placeholder="Contraseña"></input>
                </div>
                <a href='/' class="buttonSign">Sign up</a>
            </form>
            <div class="form-section">
            <p>¿Ya tienes una Cuenta? <a href="Login">Entra</a> </p>
            </div>
        </div>
    </body>
    
    );
}

export default SignPage;