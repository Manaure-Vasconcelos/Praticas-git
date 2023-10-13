import newPassWord from './geradores.js';

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('gerar-senha')) selectPassWord()
})

function selectPassWord() {
  const divPassWord = document.querySelector('.senha-gerada');
  const checkBox = document.querySelectorAll('.checkbox');

  const system = []
  for (const box of checkBox) {
    if (box === document.querySelector('.qtd-caracteres')) {
      system.push(box.value)
      continue
    }
    system.push(box.checked)
  }

  const passaWord = newPassWord(...system);

  divPassWord.innerHTML = passaWord;
}