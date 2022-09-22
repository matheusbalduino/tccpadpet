const User = use('App/Models/User')

class Message{

  constructor(sender, receiver, message){
    this.sender = sender;
    this.receiver = receiver;
    this.message = message;
  }

  async registerMessage(){
    try {

      const body = {
        message: this.message,
        sender:  this.sender,
        reciever: this.receiver,
        selfsender: this.sender === this.receiver? true : false
      };

      const user = await User.findBy('id', this.sender);

      const message = await user.messages().create(body);

      return message;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Message;
