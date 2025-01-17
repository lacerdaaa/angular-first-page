import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';


@Component({
  selector: 'news-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  newLetterForm: FormGroup;

  constructor( private service: NewsletterService ) {
    this.newLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  submit() {
    if( this.newLetterForm.valid) {
      this.service.sendData(this.newLetterForm.value.name, this.newLetterForm.value.email).subscribe({
        next: () => {
          this.newLetterForm.reset();
        }
      })
    }
  }
}
