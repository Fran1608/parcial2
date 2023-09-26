const loginButton = document.getElementById("loginButton");
    const registroButton = document.getElementById("registroButton");
    const formulario = document.getElementById("formulario");

    loginButton.addEventListener("click", () => {
      formulario.classList.add("hidden");
      document.getElementById("nombre").required = false;
      document.getElementById("apellido").required = false;
      document.getElementById("numero").required = false;
      document.getElementById("correo").required = false;
      document.getElementById("contrasena").required = true;
    });

    registroButton.addEventListener("click", () => {
      formulario.classList.remove("hidden");
      document.getElementById("nombre").required = true;
      document.getElementById("apellido").required = true;
      document.getElementById("numero").required = true;
      document.getElementById("correo").required = true;
      document.getElementById("contrasena").required = true;
    });
