
let openModalButton = document.getElementById('modalOpen'),
  modalReserv = document.querySelector('.modal-find'),
  formButtons = document.querySelectorAll('.button-form');


openModalButton.addEventListener('click', function(){
  // modalReserv.classList.add('modal-active');
  modalReserv.classList.toggle('modal-active');
});

for(let i = 0; i < formButtons.length; i++){
    formButtons[i].addEventListener('click', function(e){
      e.preventDefault();
    });
}

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