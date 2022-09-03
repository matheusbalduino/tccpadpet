'use strict'

class User {
  get rules () {
    return {
      username: 'required|string|unique:users',
      password: 'required|string',

    }
  }

  get messages(){
    return {
      'username.required':'Username é obrigatório',

      'password.required': 'Senha é obrigatório',



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
