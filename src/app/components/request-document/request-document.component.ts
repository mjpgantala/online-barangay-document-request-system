import { Component } from '@angular/core';
import { SidemenuComponent } from '../../layouts/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-request-document',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './request-document.component.html',
  styleUrls: ['./request-document.component.css'],
})
export class RequestDocumentComponent {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      inp_documents: ['', Validators.required],
      inp_file: [null, Validators.required],
      inp_billing: [null],
      inp_purpose: ['', Validators.required],
      term: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.requestForm.value);
    }
  }

  handleFileInput(event: Event, controlName: string) {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      this.requestForm.patchValue({
        [controlName]: input.files,
      });
    }
  }
}
