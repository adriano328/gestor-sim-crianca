import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registred',
  templateUrl: './registred.page.html',
  styleUrls: ['./registred.page.scss'],
})
export class RegistredPage implements OnInit {

  forms!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.forms = this.formBuilder.group({

      })
    }

  ngOnInit() {
  }

}
