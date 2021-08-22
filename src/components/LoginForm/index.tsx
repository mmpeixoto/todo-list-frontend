import { FormEvent } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Form } from "./style";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await api.post("/login", { username, password });

    const { user, token } = response.data;

    if (user && token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
      history.push("/home");
    } else {
      console.log("erro");
    }
  }

  async function handleNewUser() {
    const response = await api.post("/newUser", { username, password });
  }

  return (
    <Container>
      <Form>
        <div className="loginBox">
          <input
            className="animation"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span>Nome de usuário</span>
        </div>
        <div className="loginBox">
          <input
            className="animation"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span>Senha</span>
        </div>
        <input type="submit" onClick={(e) => handleSubmit(e)} value="Entrar" />
        <input
          type="submit"
          onClick={handleNewUser}
          value="Cadastrar novo usuário"
        />
      </Form>
    </Container>
  );
}
