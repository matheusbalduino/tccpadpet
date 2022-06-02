const Tutor = use('App/Models/Tutor')
const Vet = use('App/Models/Veterinary')
const User = use('App/Models/User')

class Message{

  constructor(sender, reciever, message){
    this.sender = sender;
    this.reciever = reciever;
    this.message = message;
  }

  async _getUserTutor(){
   const user = await User.query().where('tutor_id', this.sender).first();
   return user.id;
  }

  async _getUserVet(){
    const user = await User.query().where('veterinary_id', this.sender).first();
   return user.id;
  }
 /**
 * @param {number} sender
 * @param {number} reciever
 * @param {string} message
 * @param {number} id
 */
  async registerMessageTutor(id){
    try {

      const tutor = await Tutor.find(id);

      const body = {
        message: this.message,
        sender:  await this._getUserTutor(),
        reciever: this.reciever
      };

      const message = await tutor.messages().create(body);

      return message;
    } catch (error) {
      throw error;
    }
  }

 /**
 * @param {number} sender
 * @param {number} reciever
 * @param {string} message
 * @param {number} id
 */
  async registerMessageVet(id){
    try {
      const vet = await Vet.find(id);

      const body = {
        message: this.message,
        sender:  await this._getUserVet(),
        reciever: this.reciever
      }

      const message = await vet.messages().create(body);

      return message;

    } catch (error) {
      throw error;
    }
  }
}

module.exports = Message;
