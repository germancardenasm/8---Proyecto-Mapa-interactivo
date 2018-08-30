streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView
  var mapOptions 
  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
     
        panorama = new google.maps.StreetViewPanorama(
          document.getElementById("pano"),
          {
            position: posicionCentral,
            visible: true
          }
        );
        mapa.setStreetView(panorama);

       
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
        panorama.setPosition(ubicacion);
         
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
