import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { catchError, fromEvent, merge, Observable } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';
import { ToastrService } from 'ngx-toastr';
import { Tutor } from 'src/app/interfaces/user';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/validators/generic-form-validation';
import { existsValue } from 'src/app/utils/stringUtils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-tutor',
  templateUrl: './cadastro-tutor.component.html',
  styleUrls: ['./cadastro-tutor.component.scss']
})
export class CadastroTutorComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  /**
  * VARIABLES
  */
  hide1 = true;
  hide2 = true;
  tutorSend: Tutor = new Tutor()
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'username'];
  dataSource: Tutor[] = [];
  registerTutor: FormGroup;
  tutorErrors: any = {
    document: false,
    email: true
  };

  baseUrl = environment.baseUrl;

  /**
  * Constructor
  */
  constructor(private cadastro: CadastroService, private fb: FormBuilder, private toastr: ToastrService) {
    this.validationMessages = {
      document: {
        required: 'Informe seu documento'
      },
      email: {
        required: 'Informe seu email'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};
  changeNotSave: boolean;

  ngOnInit(): void {
    this.index();
  }

  ngAfterViewInit(): void {

    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.registerTutor);
      this.changeNotSave = true;
      Object.keys(this.displayMessage).forEach((item: string) => {
        if (existsValue(this.displayMessage[item])) this.tutorErrors[item] = true
      })
    })
  }

  index() {
    this.validateForm();
  }

  getUsers() {
    // this.cadastro.getDataUsers().subscribe((res: User[]) => {
    //   this.dataSource = res.map((item: User) => {
    //     return {
    //       email: item.email,
    //       first_name: item.first_name,
    //       last_name: item.last_name,
    //       username: item.username,
    //     }
    //   })
    // })
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
    this.toastr.success('Usuário Criado', 'Sucesso', {
      timeOut: 3000
    })
    this.tutorSend = Object.assign(this.tutorSend, this.registerTutor.value)
    console.log(this.tutorSend)
    this.registerTutor.reset()

  }

  validateForm(): void {
    try {
      this.registerTutor = this.fb.group({
        avatar: [""],
        document: ["", [Validators.required]],
        email: ["", [Validators.required]],
        description: [""]
      });
    } catch (error) {
      console.log(error)
    }
  }

}
