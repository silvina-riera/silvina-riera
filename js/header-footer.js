const headerTemplate = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid col-10">
  <a class="navbar-brand" href="index.html">
    <img src="assets/images/codoacodo.png" alt="Codo a Codo" height="50">Conf Bs As</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Menu Principal">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">La conferencia</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#oradores">Los oradores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#bsAsOctubre">El lugar y la fecha</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#quieroSerOrador">Conviértete en orador</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Comprar tickets</a>
      </li>
    </ul>
  </div>
</div>
</nav>`

const footerTemplate = `<ul class="nav footer__fondo mt-3 py-4 justify-content-center">
<li class="nav-item">
  <a class="nav-link link-light" href="#">Preguntas frecuentes</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Contáctanos</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Prensa</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Conferencias</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Terminos y condiciones</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Privacidad</a>
</li>
<li class="nav-item">
  <a class="nav-link link-light" href="#">Estudiantes</a>
</li>
</ul>`



const header = document.getElementsByTagName('header')[0]
const footer = document.getElementsByTagName('footer')[0]

header.innerHTML = headerTemplate
footer.innerHTML = footerTemplate