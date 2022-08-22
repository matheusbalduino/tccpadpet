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

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.cadastro.getDataUsers().subscribe( (res) => {
      console.log(res);
    })
  }

}
