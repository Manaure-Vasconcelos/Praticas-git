import { ValidaCPF } from "./validaCPF.js";

class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.event()
  }

  event() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
    
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const camposValidos = this.camposValidos()
    const senhasValidas = this.senhasValidas()

    if(camposValidos === senhasValidas){
      alert('Enviado')
    }

  }

  senhasValidas() {
    let valid = true;
    const senha = document.querySelector('.senha');
    const repetirSenha = document.querySelector('.repetirSenha');

    if(senha.value !== repetirSenha.value) {
      this.newError(senha, 'As senhas devem ser iguais.')
      this.newError(repetirSenha, 'As senhas devem ser iguais.')
      valid = false;
    }

    return valid
  }

  camposValidos() {
    let valid = true;

    for(const errorText of document.querySelectorAll('.errorText')) {
      errorText.remove()
    }

    for(const campo of document.querySelectorAll('.validForm')) {
      if(!campo.value) {
        this.newError(campo, 'Esse campo é obrigatório')
        valid = false;
      }

      if(campo.classList.contains('cpf')){
        if(!this.validarCpf(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.usuarioValid(campo)) valid = false;
      }

    }

    return valid
  }

  validarCpf(campo) {
    let valid = true;
    const cpfValid = new ValidaCPF(campo.value);

    if(!cpfValid.valida()){
      this.newError(campo, 'CPF invalido');
      valid = false;
    }

    return valid
  }

  usuarioValid(campo) { 
    let valid = true;
    const usuario = campo.value

    if(usuario.length < 6 || usuario.length > 12) {
      this.newError(campo, 'Usuário deve conter de 6 a 12 caracteres')
      valid = false
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.newError(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid
  }

  newError(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('errorText')
    campo.insertAdjacentElement('afterend', div)
  }
}

const formulario = new ValidaFormulario();
