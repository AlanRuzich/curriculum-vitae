function ToggleChevron(id) {
  document.getElementById(id).classList.toggle("bi-chevron-right");
  document.getElementById(id).classList.toggle("bi-chevron-down");
}

document.getElementById("botonIdiomas").addEventListener('click', function() {
  ToggleChevron("chevronIdiomas");
});

document.getElementById("botonAptitudes").addEventListener('click', function() {
  ToggleChevron("chevronAptitudes");
});

document.getElementById("botonHabilidades").addEventListener('click', function() {
  ToggleChevron("chevronHabilidades");
});

document.getElementById("botonCertificados").addEventListener('click', function() {
  ToggleChevron("chevronCertificados");
});
