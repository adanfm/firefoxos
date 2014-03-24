var button = document.getElementById('button_name');
var nome = document.getElementById('meu_nome');

button.addEventListener('click', function(){
    var text = nome.value;
    alert('Ola ' + text);
})