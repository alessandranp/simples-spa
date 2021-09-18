const BTN_CADASTRAR = document.getElementById('btn-cadastrar');
const BTN_LISTAR = document.getElementById('btn-listar');
const SECTION_CADASTRAR = document.getElementById('section-cadastrar');
const SECTION_LISTAR = document.getElementById('section-listar');

BTN_LISTAR.addEventListener('click', function(){
  SECTION_CADASTRAR.style.display = 'none';
  SECTION_LISTAR.style.display = 'block';
});

BTN_CADASTRAR.addEventListener('click', function(){
    SECTION_LISTAR.style.display = 'none';
    SECTION_CADASTRAR.style.display = 'block';
});