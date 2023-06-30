import React from 'react';
import '../Pages/Sign.css';

function LoginPage() {
  return (
    <body>
        <div class="e62_22">
            <div class="e65_6"></div>
        </div>
        <div class="form-box">
            <form class="form">
            <span class="title">Entrar</span>
            <span class="subtitle">Usa tu cuenta para Entrar al sistema</span>
        <div class="form-container">
			<input type="email" class="input" placeholder="Correo"></input>
			<input type="password" class="input" placeholder="Contraseña"></input>
                </div>
                <a href='/' class="buttonSign">Entrar</a>
            </form>
            <div class="form-section">
            <p>¿Aun no tienes una cuenta? <a href="Sign">Crear cuenta</a> </p>
            </div>
        </div>
    </body>
    
    );
}

export default LoginPage;