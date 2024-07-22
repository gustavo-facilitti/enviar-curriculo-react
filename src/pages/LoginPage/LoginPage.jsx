import { useState } from "react";
import { toast } from "react-toastify";

import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //update state
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    console.log(email, password);

    try {
      const response = await fetch(`${BASE_URL}/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast.success("Login realizado!");
        // console.log("response:", response);

        //get token
        const token = await response.json();

        //store token in localStorage
        localStorage.setItem("token", token);

        //redirect to all candidates page after loggin in
        navigate("/resumes");
      }

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Não autorizado.");
          return;
        }
        toast.error("Erro ao realizar login. Tente novamente.");
      }

      console.log("response:", response);
    } catch (error) {
      toast.error("Erro");
      console.error(error);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={`container ${styles.login}`}>
      <h2 className="title">Login</h2>
      <form
        className={styles.form_container}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={50}
        />

        <label htmlFor="email">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          maxLength={50}
        />

        <button type="submit" className={styles.send_btn}>
          Entrar
        </button>
        <span>
          <p>Não possui conta?</p>
          <a href="/registrar">Cadastre-se!</a>
        </span>
      </form>
    </div>
  );
};
export default LoginPage;
