import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';

@Component({
  selector: 'app-cadastro-tutor',
  templateUrl: './cadastro-tutor.component.html',
  styleUrls: ['./cadastro-tutor.component.scss']
})
export class CadastroTutorComponent implements OnInit {

  /**
  * VARIABLES
  */
  hide1 = true;
  hide2 = true;
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'username'];
  dataSource: User[] = [];

  /** Users data */
  email = new FormControl('', [Validators.required, Validators.email]);
  first_name = new FormControl('', [Validators.required]);
  last_name = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.min(6)]);
  confirm = new FormControl('', [Validators.required, Validators.min(6)]);

  /**yy
  * Constructor
  */
  constructor(private cadastro: CadastroService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.cadastro.getDataUsers().subscribe(( res: User[] ) => {
      this.dataSource = res.map( (item:User ) => {
        return {
          email : item.email,
          first_name: item.first_name,
          last_name: item.last_name,
          username: item.username,
        }
      })
    })
  }

  postUser(){
    const user: UserPost = {
      email: String(this.email.value),
      firstName: String(this.first_name.value),
      lastName: String(this.last_name.value),
      username: String(this.username.value),
      password: String(this.password.value),
    }
    if(
      this.email.hasError('required') ||
      this.first_name.hasError('required') ||
      this.last_name.hasError('required') ||
      this.username.hasError('required') ||
      this.password.hasError('required') ||
      this.passwordEquals()
    ){
      console.log('error');
    }
    else{
      this.cadastro.postDataUser(user).subscribe((res)=> console.log(res));
    }
  }

  getErrorsEmail(){
    if (this.email.hasError('required'))
      return 'E-mail deve ser preenchido';
    else if (this.email.hasError('email'))
      return 'E-mail Inválido'
    else return '';
  }
  getErrorUserName(){
    if(this.username.hasError('required'))
      return 'Usuário deve ser preenchido'
    else return '';
  }
  getErrorFirstName(){
    if(this.first_name.hasError('required'))
     return 'Primeiro Nome deve ser preenchido'
    else return '';
  }
  getErrorLastName(){
    if(this.first_name.hasError('required'))
     return 'Último Nome deve ser preenchido'
    else return '';
  }
  getErrorPassword(){
    if(this.password.hasError('required'))
      return 'Senha deve ser preenchido'
    else return '';
  }
  getErrorConfirm(){

    if(this.confirm.hasError('required'))
      return 'Senha deve ser preenchido'
    else if(this.confirm !== this.password)
      return 'Senhas não conferem'
    else return '';
  }

  passwordEquals(){
    if(this.confirm !== this.password)
      return false;
    return true;
  }

}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
}


export interface UserPost {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

