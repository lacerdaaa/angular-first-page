import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'news-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  newLetterForm: FormGroup;

  constructor() {
    this.newLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  submit() {
    console.log(this.newLetterForm.value);
  }
}
