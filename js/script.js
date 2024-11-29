((d) => {
  // declarar referencias  a los objetos
  const $btnMenu = d.querySelector(".header__menu-btn"),
    $menu = d.querySelector(".menu");
  // console.log($btnMenu);
  // console.log($menu);
  // generar el addEventListener
  $btnMenu.addEventListener("click", (e) => {
    // console.log("click");
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    // mostrar el icono menu hamburguesa
    $btnMenu.firstElementChild.classList.remove("none");
    // ocultar el icono x
    $btnMenu.lastElementChild.classList.add("none");
    //ocultar el contenido del menu
    $menu.classList.remove("is-active");
  });
})(document);

/*ContactForm*/

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/heduardo.garcia@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none");
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "ocurrio un error alk enviar , intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status} : ${message}`;
        $loader.classList.add("none");
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
