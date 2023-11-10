const supabaseURL = "url";
const supabaseKEY = "tuapikey";
const supabaseAUTHORIZATION = "autentificacion";

const usuario = {
  name: "tu nombre",
  email: "tuemail@gmail.com",
  city: "ciudad",
};


fetch(supabaseURL, {
  method: "POST",
  headers: {
    apiKey: supabaseKEY,
    Authorization: supabaseAUTHORIZATION,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  },
  body: JSON.stringify({
    name: usuario.name,
    email: usuario.email,
    city: usuario.city,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }
    return response.text();
  })
  .then((text) => {
    try {
      const data = JSON.parse(text);
      console.log("Datos recibidos: " + data);
    } catch (error) {
      console.log("Respuesta no JSON o vacia");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
