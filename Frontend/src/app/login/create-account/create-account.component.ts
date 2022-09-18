import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import { CadastroService } from 'src/app/Services/cadastro-service.service';
import { existsValue } from 'src/app/utils/stringUtils';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/validators/generic-form-validation';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements:ElementRef[];

  labelPosition: 'vet' | 'tutor' = 'tutor';
  name:string = '';
  registerTutor: FormGroup;
  changeNotSave: boolean;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage:DisplayMessage = {};

  user: any = { };
  crmv: boolean;


  tutorErrors: any = {
    document: false,
    email: false,
    password:false,
    username:false,
    usertype:false,
    crmv: false
  };

  constructor(private router: Router, private fb: FormBuilder, private cadastro: CadastroService) {
    this.validationMessages = {
      username:{
        required:'Informe um usuário'
      },
      document:{
        required:'Informe um CPF'
      },
      email:{
        required: 'Informe um email'
      },
      password:{
        required: 'Informe uma senha'
      },
      usertype:{
        required: 'Informe seu tipo de usuário'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

   ngOnInit(): void {
    this.validateForm();
  }

   ngAfterViewInit(): void {

    let controlBlurs: Observable <any>[] = this.formInputElements
    .map((formControl:ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.registerTutor);
      this.changeNotSave = true;
      Object.keys(this.displayMessage).forEach((item:string)=>{
        if(existsValue(this.displayMessage[item])) this.tutorErrors[item] = true
      })
    })
  }

  registerUser(){
    console.log(this.registerTutor)
    console.log(this.registerTutor)
    this.user = Object.assign(this.user, this.registerTutor.value)
    this.user.role = "tutor"

    if(this.user.usertype === 'vet'){
      this.user.role = "vet"
      if(!existsValue(this.user.crmv)){
        this.tutorErrors.crmv = true;
        this.displayMessage['crmv'] = 'Informe seu CRMV <br/>';
        return
      }
    }
    console.log(this.user)
    this.cadastro.postDataUser(this.user.usertype, this.user).subscribe( res => {
      console.log(res)
      this.router.navigate(['/'])
    },
    ( error => console.log(error.error.errors) )
    )
  }

  validateForm():void{
    try {
      this.registerTutor = this.fb.group({
        username: ["",[Validators.required]],
        document: ["",[Validators.required]],
        email: ["",[Validators.required]],
        password: ["", [Validators.required]],
        usertype: ["", [Validators.required]],
        crmv: [""]
      });
    } catch (error) {
      console.log(error)
    }
  }
}
