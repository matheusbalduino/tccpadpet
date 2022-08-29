'use strict'

class User {
  get rules () {
    return {
      username: 'required|string|unique:users',
      email: 'required|email|unique:tutors  ',
      password: 'required|string',
      document: 'required|string|unique:tutors',
    }
  }

  get messages(){
    return {
      'username.required':'Username é obrigatório',
      'email.required':'Email é obrigatório',
      'password.required': 'Senha é obrigatório',
      'document.required': 'Documento é obrigatório',
      'email.unique': 'Erro ao registrar o email',
      'document.unique': 'Erro ao registrar documento',
      'username.unique': 'Erro ao registrar username',
    }
  }

  get data() {
    const requestBody = this.ctx.request.post();

    const data = Object.assign({}, requestBody);
    return data;
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest({
      message: 'Falha ao validar dados',
      errors: errorMessages.map((errorMessage) => {
        const data = {};
        data[errorMessage.field] = errorMessage.message;
        return data;
      }),
    });
  }
}

module.exports = User
