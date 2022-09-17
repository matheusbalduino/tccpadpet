import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { catchError, fromEvent, merge, Observable } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';
import { ToastrService } from 'ngx-toastr';
import { Tutor } from 'src/app/interfaces/user';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/validators/generic-form-validation';
import { existsValue } from 'src/app/utils/stringUtils';
import { environment } from 'src/environments/environment';
import { states }  from 'src/app/interfaces/states';

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

  states: any = states;

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

  }

  postUser() {

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
        name: [""],
        description: [""],
        document: ["", [Validators.required]],
        email: ["", [Validators.required]],
        street: [""],
        number: [""],
        neighborhood: [""],
        zip_code: [""],
        city: [""],
        state: [""]
      });
    } catch (error) {
      console.log(error)
    }
  }

}
