import React from 'react';
import { } from "./styles"

function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>Marque os episodeos que já assistiu e fique por dentro dos lançamentos!</p>
      <button>Entre com uma conta Google</button>
      <hr /> ou entre com seu E-mail <hr />
      <form action="">
        <label htmlFor="">E-mail*</label>
        <input type="text" />
        <label htmlFor="">Senha*</label>
        <input type="password" />
        <input type="checkbox" name="keep-connected" id="keep-connected" />
        <label htmlFor="">Mantenha-se conectado</label>
        <a href="#">Esqueceu a senha?</a>
        <button type="submit">Entrar</button>
      </form>
      <span>Ainda não tem uma conta? <a href="#">Cadastra-se</a></span>
    </>
  );
}

export default Login;