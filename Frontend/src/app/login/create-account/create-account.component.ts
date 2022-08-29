import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  labelPosition: 'vet' | 'tutor' = 'tutor';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.labelPosition);
  }

  registerUser(){
    console.log('ola', this.labelPosition);
    this.router.navigate(['/'])
  }

}
