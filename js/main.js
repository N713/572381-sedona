'use strict'

let openModalButton = document.getElementById('modalOpen'),
  modalReserv = document.querySelector('.modal-find');


openModalButton.addEventListener('click', function(){
  // modalReserv.classList.add('modal-active');
  modalReserv.classList.toggle('modal-active');
});

function initMap() {
  var uluru = {lat: 34.8697395, lng: -111.7609896};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}