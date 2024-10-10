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
