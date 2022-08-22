import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';

@Component({
  selector: 'app-cadastro-tutor',
  templateUrl: './cadastro-tutor.component.html',
  styleUrls: ['./cadastro-tutor.component.scss']
})
export class CadastroTutorComponent implements OnInit {

  hide1 = true;
  hide2 = true;
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'username'];
  dataSource: User[] = [];

  constructor(private cadastro: CadastroService) { }

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
          username: item.username
        }
      })
    })
  }



}

export interface User {
  email: string;
  first_name: number;
  last_name: number;
  username: string;
}

