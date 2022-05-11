'use strict'

class User {
  get rules () {
    return {
      'username': 'required|string',
      'email': 'required|email|unique',
      'password': 'required|string',
      'document': 'required|string',
      'profession': 'required|string'
    }
  }

  get messages(){
    return {
      'username.required':'Username é obrigatório',
      'email.required':'Email é obrigatório',
      'email.unique':'Não foi possível registrar o email',
      'password.required': 'Senha é obrigatório',
      'document.required': 'Documento é obrigatório',
      'profession.required': 'Profissão é obrigatório'
    }
  }

  get sanitizationRules () {
    // sanitize data before validation
  }
}

module.exports = User
