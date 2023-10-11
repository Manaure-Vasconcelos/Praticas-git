/* 
  Http Request:
  Método mais antigo e mais custoso usando ajax;
  Faz com que carregue uma pagina hmtl em uma determinada area de outro html principal.

*/

/* const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
 */
//==============================================================================================================

/* 
  Método fetch():
  fetch retorna uma promise, após isso pode usar o conceito de promises.
  Pode fazer a requisição de json, html.
  Foi usado o async / await para simplificar o código. 
  O await esperar até a promise ser resolvida para então passar para a variável.
  try / catch para tratar error.
*/

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href)
    const html = await response.text()
    carregaResultado(html)
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}