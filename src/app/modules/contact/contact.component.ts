import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { HttpWebService } from 'src/app/services/http-web.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  apiError: string = '';
  formSuccess = false;
  constructor(private httpService: HttpWebService) { }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(150)]),
      email: new FormControl('',[Validators.required]),
      additional: new FormGroup ({
          skills: new FormControl(''),
          married: new FormControl('')
       })
    })
  }

  patch() {
    this.contactForm.patchValue({
      name: 'Divya',
      age: '40',
      email: '',
      additional: {
        skills: 'test1',
        married: '2'      
      }
    })
  }

  sendMail(){
      this.httpService.sendMail(this.contactForm.value).subscribe(apiResponse => {
         if (apiResponse) {
            this.apiError= '';
            this.formSuccess = true;
         }
      }, error=> {
        this.apiError = 'Unable to save your form';
      });
  }

  clear() {
    this.name.setValidators([]);
    this.name.updateValueAndValidity();
  }

  get name() {
    return this.contactForm.get('name');
  }

}
