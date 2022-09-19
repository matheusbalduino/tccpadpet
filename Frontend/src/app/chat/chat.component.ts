import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CadastroService } from '../Services/cadastro-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: any ={
    Name: "matheus",
    Message: "esta mensagem"
  }

  vets: any[];
  vetOne: any ={
    user:{
      username: ""
    }
  }

  constructor(private serviceUsers: CadastroService) { }

  ngOnInit(): void {
    this.getVets();
    this.vetOne = this.vets[0];
  }

  getVets(){
    this.serviceUsers.getUsers("vet").subscribe({
      next: (res:any) => {
        console.log(res)
        this.vets = res
      }
    })
  }

  getVet(vet:any){
    this.vetOne = vet;
    //this.chatService.() usar o vet aqui e o usuário da session
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
