import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Message, Messages } from '../interfaces/messages';
import { CadastroService } from '../Services/cadastro-service.service';
import { ChatService } from '../Services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string = "";
  messages: Messages[];

  vets: any[];
  vetOne: any ={
    user:{
      username: ""
    }
  }

  constructor(private serviceUsers: CadastroService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.getVets();
  }

  getVets(){
    this.serviceUsers.getUsers("vet").subscribe({
      next: (res:any) => {
        console.log(res)
        this.vets = res
        this.vetOne = this.vets[0];
      }
    })
  }

  getVet(vet:any){
    this.vetOne = vet;
    this.getMessages()
    //this.chatService.() usar o vet aqui e o usuário da session
  }

  getMessages(){
    this.chatService.getMessage(this.vetOne.user.id).subscribe({
      next: (res: Messages[])=> {
        this.messages = res
        console.log(this.messages)
      }
    })
  }

  sendMessage(){
    const body: Message = {
      receiver : this.vetOne.user.id,
      message_sent: this.message
    }
    console.log(body)
    this.chatService.sendMessage(body).subscribe({
      next: (res)=> {
        this.getMessages();
        console.log(res)
      }
    })
  }

  click = true
  hideChats(){
    console.log('testeclick')
    if(this.click){
      this.click = false;
      $(".messagehide").hide()
      $("hr").hide()
      $(".search-box").hide()
      $(".mainchat").removeClass("col-md-8")
      $(".mainchat").addClass("col-md-12")
    }
    else{
      this.click = true;
      $(".messagehide").show()
      $("hr").show()
      $(".search-box").show()
      $(".mainchat").removeClass("col-md-12")
      $(".mainchat").addClass("col-md-8")
    }
  }

}
