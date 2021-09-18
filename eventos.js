const BTN_CADASTRAR = document.grtElementById('btn-cadastrar');
const BTN_LISTAR = document.grtElementById('btn-listar');
const SECTION_CADASTRAR = document.grtElementById('section-cadastrar');
const SECTION_LISTAR = document.grtElementById('section-listar');

BTN_LISTAR.addEventListener('click', function(){
  SECTION_CADASTRAR.style.display = 'none';
  SECTION_LISTAR.style.display = 'block';
});

BTN_CADASTRAR.addEventListener('click', function(){
    SECTION_LISTAR.style.display = 'none';
    SECTION_CADASTRAR.style.display = 'block';
});
