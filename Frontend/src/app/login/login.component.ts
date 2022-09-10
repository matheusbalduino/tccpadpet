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
// this.loginService.login(this.user).subscribe({
    //   next(res: any){
    //     console.log(res)

    //   },
    //   error(error){
    //     console.log(error)
    //   }
    // });

  login():void {

    this.loginService.login(this.user).subscribe(
      (res: any) =>{
        console.log(res);
        sessionStorage.setItem('token', res.token)
        this.router.navigate(['/index'])
      },
      error => {
        this.toastr.error('Erro de Login', 'Error', {
              timeOut: 3000,
        });
        console.log(error)
      }
    );
  }
}

export interface User{
  username: string,
  password: string
}
