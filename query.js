/***** Al hacer click sobre el menú se realiza una función ******/
$(".menu-toggle-btn").click(function(){
  
  /* Se crea un ícono "X" al presionar el menú hamburguesa  */ 
    $(this).toggleClass("fa-times");

  /* Llama a una propiedad creada llamada "active" dentro del CSS
    Donde se muestran las categorias del menú con las propiedades en modo responsive */
    $(".menuNavegacion").toggleClass("active");
  });