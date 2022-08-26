import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';
import { ToastrService } from 'ngx-toastr';

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
  registerTutor: FormGroup;

  /**
  * Constructor
  */
  constructor(private cadastro: CadastroService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.getUsers()
  }

  getUsers() {
    this.cadastro.getDataUsers().subscribe((res: User[]) => {
      this.dataSource = res.map((item: User) => {
        return {
          email: item.email,
          first_name: item.first_name,
          last_name: item.last_name,
          username: item.username,
        }
      })
    })
  }

  postUser() {
    // if (false) {
    //   this.toastr.success('Usuário Criado', 'Sucesso', {
    //     timeOut: 3000,
    //   });
    //   this.cadastro.postDataUser().subscribe((res) => console.log(res));
    //   setTimeout(() => {
    //     this.getUsers()
    //   }, 300)
    // }
    // else if (false) {
    //   console.log('error');
    //   this.toastr.error('Senhas não conferem', 'Erro de Cadastro', {
    //     timeOut: 3000,
    //   });
    // }
    // else {
    //   console.log('error');
    //   this.toastr.error('Dados Obrigatórios', 'Erro de Cadastro', {
    //     timeOut: 3000,
    //   });
    // }
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

