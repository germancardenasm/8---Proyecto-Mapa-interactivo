var mapa // Mapa que vamos a modificar

var posicionCentral = {lat:6.19649625  , lng:-75.57381071769959}
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
//Areka = {lat=6.1748123, lng-75.5715971}
//Medellin = {lat=6.2443382, lng=-75.573553}
//Bogota = {lat=4.5980772, lng=-74.0761028}
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  mapa = new google.maps.Map(document.getElementById('map'),
    {
      center: posicionCentral,
      zoom: 12
    }
  )
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
