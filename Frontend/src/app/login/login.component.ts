import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    username:"",
    password:""
  };


  constructor(private router: Router, private loginService: LoginServiceService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  login():void {
    console.log(this.user)
    this.loginService.login(this.user).subscribe({
      next: (res: any) =>{
        sessionStorage.setItem('token', res.credentials.token),
        sessionStorage.setItem('role', res.role)
        this.router.navigate(['/index/home'])
      },
      error: error => {
        this.toastr.error('Erro de Login', 'Error', {
              timeOut: 3000,
        });
        console.log('error',error)
      }}
    );
  }
}

export interface User{
  username: string,
  password: string
}
