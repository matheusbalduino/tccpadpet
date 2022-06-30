"use strict";

class Vet {
  get rules() {
    return {
      // validation rules
      crmv: "unique:veterinaries",
      document: "unique:veterinaries",
      email:"unique:veterinaries"
    };
  }
  get messages() {
    return {
      "crmv.unique": "crmv já cadastrado",
      "document.unique": "documento já cadastrado",
      "email.unique": "email já cadastrado",
    };
  }

  get data() {
    const requestBody = this.ctx.request.post();

    const data = Object.assign({}, requestBody);
    return data;
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest({
      message: "Falha ao validar dados",
      errors: errorMessages.map((errorMessage) => {
        const data = {};
        data[errorMessage.field] = errorMessage.message;
        return data;
      }),
    });
  }
}

module.exports = Vet;
