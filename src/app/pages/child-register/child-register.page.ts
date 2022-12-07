import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.page.html',
  styleUrls: ['./child-register.page.scss'],
})
export class ChildRegisterPage implements OnInit {

  forms!: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.forms = this.formBuilder.group({})
   }

  ngOnInit() {
  }

}
