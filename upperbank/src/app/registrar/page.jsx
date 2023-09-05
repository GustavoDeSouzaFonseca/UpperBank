"use client";
import React, { useState } from "react";
import Router from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

function Registrar() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const data = {
      usuario: usuario,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Registrado com sucesso");
        Router.push("/login");
      } else {
        console.error("Registrar falhou");
        setError("Algo está errado, por favor verifique");
      }
    } catch (error) {
      console.error("Erro:", error);
      setError("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="bg-lime-950 w-full h-[38.5rem] flex justify-center items-center">
        <div className="mb-28 bg-slate-900 p-10 rounded-3xl flex flex-col justify-center items-center">
          <span className="text-white">Registrar</span>
          <input
            className="w-full mt-5 rounded-2xl"
            placeholder="Digite seu email"
            value={usuario}
            onChange={handleUsuarioChange}
          />
          <input
            className="w-full m-5 rounded-2xl"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link href="/login">
            <span className="text-lime-500">Login</span>
          </Link>
          <button
            className="m-10 w-40 h-10 bg-lime-500 rounded-2xl"
            onClick={handleRegister}
          >
            Registrar
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registrar;
