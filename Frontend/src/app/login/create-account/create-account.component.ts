import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  labelPosition: 'vet' | 'tutor' = 'tutor';

  constructor() { }

  ngOnInit(): void {
    console.log(this.labelPosition);
  }

  registerUser(){
    console.log('ola', this.labelPosition);
  }

}
