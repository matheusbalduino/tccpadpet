import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

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
  constructor() { }
  ngOnInit(): void {
  }

  click = true
  hideChats(){
    console.log('testeclick')
    if(this.click){
      this.click = false;
      $(".messagehide").hide('slow')
      $("hr").hide('slow')
      $(".search-box").hide('slow')

    }
    else{
      this.click = true;
      $(".messagehide").show('slow')
      $("hr").show('slow')
      $(".search-box").show('slow')



    }
  }

}
