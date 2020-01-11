loadFicha();

function loadFicha(){
  const usuario = JSON.parse(localStorage.getItem('token'));
  $.get('http://localhost:5000/personagem/getPersonagem',{usuario},function(data){
    if(data){
      let personagem = data.personagem;
      const attr = $('.attr');
      const attrPersonagem = $('.attrPersonagem');
      Array.from(attr).forEach(element => {
        const label = $(element).find('small').text();
        const input = $(element).find('input');
        const value = personagem[`${label}`];
        $(input).val(value);
      });
      Array.from(attrPersonagem).forEach((element,index) => {
        const label = $(element).find('.attrPersonagemValor');
        const input = $(element).find('.attrPersonagemModificador');
        console.log(personagem.atributos[index]);
        $(label).val(personagem.atributos[index].valor)
        $(input).val(personagem.atributos[index].modificador);
      });
      personagem.rotulos.forEach(element => {
        addRotulo(element);
      })
      personagem.itens.forEach(element => {
        addItens(element);
      })
      personagem.bizarros.forEach(element => {
        addBizarro(element);
      })
    }
  })

}
$(document).ready(function(){
  $('#userOfThisShit').text('Usuario: ' + JSON.parse(localStorage.getItem('usuario')));
  $('#addRotulos').click(function(){
    const div = document.createElement('div');
    const input = document.createElement('input');
    $(input).addClass('form-control form-control-sm novoRotulo rotuloName');
    $(input).attr('placeholder','Novo Rotulo');
    $(input).attr('oninput','salvarLocal()');
    $(div).addClass('col-12 col-md-4 col-lg-3 info py-1');
    $(div).append(input);
    $(this).parent().prepend(div);
  })
  $('#addItens').click(function(){
    const div = document.createElement('div');
    const row = document.createElement('row');
    const inputItem = document.createElement('input');
    const inputItemValue = document.createElement('input');
    const colItem = document.createElement('div');
    const colItemValue = document.createElement('div');
    $(row).addClass('row itemAdicionado');
    $(inputItem).addClass('form-control form-control-sm novoItem');
    $(colItem).addClass('col-8 pr-1');
    $(inputItem).attr('placeholder','Novo Item');
    $(inputItem).attr('oninput','salvarLocal()');
    $(inputItemValue).addClass('form-control form-control-sm novoItemValue');
    $(inputItemValue).attr('type','number');
    $(inputItemValue).attr('oninput','salvarLocal()');
    $(colItemValue).addClass('col-4 pl-1');
    $(div).addClass('col-12 col-md-4 col-lg-3 info py-1');
    $(div).append(row);
    $(row).append(colItem).append(colItemValue);
    $(colItem).append(inputItem);
    $(colItemValue).append(inputItemValue);
    $(this).parent().prepend(div);
  })
  $('#addBizarro').click(function(){
    const div = document.createElement('div');
    const row = document.createElement('row');
    const inputItem = document.createElement('input');
    const inputItemValue = document.createElement('textarea');
    const colItem = document.createElement('div');
    const colItemValue = document.createElement('div');
    $(row).addClass('row bizarrosAdicionado');
    $(inputItem).addClass('form-control form-control-sm novoBizarro');
    $(colItem).addClass('col-12');
    $(inputItem).attr('placeholder','Novo Bizarro');
    $(inputItemValue).addClass('form-control form-control-sm novoBizarroDescricao');
    $(inputItemValue).attr('type','number');
    $(inputItemValue).attr('oninput','salvarLocal()');
    $(inputItemValue).attr('placeholder','Descrição');
    $(inputItemValue).css('resize','none');
    $(colItemValue).addClass('col-12 mt-1');
    $(div).addClass('col-12 col-md-12 col-lg-12 info py-1');
    $(div).append(row);
    $(row).append(colItem).append(colItemValue);
    $(colItem).append(inputItem);
    $(colItemValue).append(inputItemValue);
    $(this).parent().prepend(div);
  })
  $('input').on('input',salvarLocal)
})

function salvarLocal() {
  var novoObjeto = {};
  novoObjeto.atributos = [];
  novoObjeto.rotulos = [];
  novoObjeto.itens = [];
  novoObjeto.bizarros = [];
  const attr = $('.attr');
  const attrPersonagem = $('.attrPersonagem')
  const rotulo = $('.rotuloName');
  const itens = $('.itemAdicionado');
  const bizarros = $('.bizarrosAdicionado');
  Array.from(attr).forEach(element => {
    const value = $(element).find('input').val();
    const name = $(element).find('small').text();
    novoObjeto[`${name}`] = value;
  });
  Array.from(attrPersonagem).forEach(element => {
    const atributoNome = $(element).find('p').text();
    const atributoValor = $(element).find('.attrPersonagemValor').val();
    const atributoModificador = $(element).find('.attrPersonagemModificador').val();
    const objeto = { 'valor' : atributoValor, 'modificador' : atributoModificador}
    novoObjeto.atributos.push(objeto);
  });
  Array.from(rotulo).forEach(element => {
    novoObjeto.rotulos.push($(element).val());
  });
  Array.from(itens).forEach(element => {
    console.log($(element));
    const name = $(element).find('.novoItem').val();
    const value = $(element).find('.novoItemValue').val();
    novoObjeto.itens.push({'name' : name, 'value':value});
  });
  Array.from(bizarros).forEach(element => {
    console.log($(element));
    const name = $(element).find('.novoBizarro').val();
    const value = $(element).find('.novoBizarroDescricao').val();
    novoObjeto.bizarros.push({'name' : name, 'value':value});
  });
  const usuario = JSON.parse(localStorage.getItem('token'));
  $.ajax({
    url: 'http://localhost:5000/personagem/setPersonagem',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({usuario,'personagem':novoObjeto})
  })
}

function addRotulo(element) {
  console.log(element);
  const div = document.createElement('div');
  const input = document.createElement('input');
  $(input).addClass('form-control form-control-sm novoRotulo rotuloName');
  $(input).attr('oninput','salvarLocal()');
  $(input).val(element);
  $(div).addClass('col-12 col-md-4 col-lg-3 info py-1');
  $(div).append(input);
  $('#rotulos').prepend(div);
}

function addItens(element) {
  const div = document.createElement('div');
  const row = document.createElement('row');
  const inputItem = document.createElement('input');
  const inputItemValue = document.createElement('input');
  const colItem = document.createElement('div');
  const colItemValue = document.createElement('div');
  $(row).addClass('row itemAdicionado');
  $(inputItem).addClass('form-control form-control-sm novoItem');
  $(colItem).addClass('col-8 pr-1');
  $(inputItem).attr('oninput','salvarLocal()');
  $(inputItemValue).addClass('form-control form-control-sm novoItemValue');
  $(inputItem).val(element.name)
  $(inputItemValue).attr('type','number');
  $(inputItemValue).attr('oninput','salvarLocal()');
  $(inputItemValue).val(element.value)
  $(colItemValue).addClass('col-4 pl-1');
  $(div).addClass('col-12 col-md-4 col-lg-3 info py-1');
  $(div).append(row);
  $(row).append(colItem).append(colItemValue);
  $(colItem).append(inputItem);
  $(colItemValue).append(inputItemValue);
  $('#itens').prepend(div);
}

function addBizarro(element) {
  const div = document.createElement('div');
  const row = document.createElement('row');
  const inputItem = document.createElement('input');
  const inputItemValue = document.createElement('textarea');
  const colItem = document.createElement('div');
  const colItemValue = document.createElement('div');
  $(row).addClass('row bizarrosAdicionado');
  $(inputItem).addClass('form-control form-control-sm novoBizarro');
  $(inputItem).attr('oninput','salvarLocal()');
  $(inputItem).val(element.name);
  $(colItem).addClass('col-12');
  $(inputItemValue).addClass('form-control form-control-sm novoBizarroDescricao');
  $(inputItemValue).attr('type','number');
  $(inputItemValue).attr('oninput','salvarLocal()');
  $(inputItemValue).css('resize','none');
  $(inputItemValue).val(element.value);
  $(colItemValue).addClass('col-12 mt-1');
  $(div).addClass('col-12 col-md-12 col-lg-12 info py-1');
  $(div).append(row);
  $(row).append(colItem).append(colItemValue);
  $(colItem).append(inputItem);
  $(colItemValue).append(inputItemValue);
  $('#bizarros').prepend(div);
}