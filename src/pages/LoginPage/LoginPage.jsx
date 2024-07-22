import { useState } from "react";
import { toast } from "react-toastify";

import styles from "./LoginPage.module.scss";

const Form = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.email);
    console.log("data to send:", formDataToSend);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Login realizado!");
        // console.log("response:", response);
      }
    } catch (error) {
      toast.error("Erro ao realizar login. Tente novamente.");
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
      </form>
    </div>
  );
};
export default Form;
