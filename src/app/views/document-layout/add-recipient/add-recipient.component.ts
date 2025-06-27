import { Component, inject, signal, viewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../../../services/http/http.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-recipient',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatAccordion,
    RouterLink,
  ],
  templateUrl: './add-recipient.component.html',
  styleUrl: './add-recipient.component.scss',
})
export class AddRecipientComponent {
  recipientForm = signal<FormGroup | null>(null);
  private _formBuilder = inject(FormBuilder);
  isStepActive: boolean = false;
  private _httpService = inject(HttpService);
  accordion = viewChild.required(MatAccordion);

  constructor() {
    this.initFormGroup();
  }

  initFormGroup() {
    const recipientForm = this._formBuilder.group({
      recipientDetails: this._formBuilder.group({
        recipientOrder: [''],
        recipientName: ['', Validators.compose([Validators.required])],
        recipientEmail: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]),
        ],
      }),

      packageDetails: this._formBuilder.group({
        packageName: ['', Validators.compose([Validators.required])],
        packageDescription: [''],
      }),

      emailNotificationDetails: this._formBuilder.group({
        emailSubject: ['', Validators.compose([Validators.required])],
        emailSubjectDescription: [''],
      }),
    });

    this.recipientForm.set(recipientForm);
  }

  toggleStepActive(): void {
    this.isStepActive = !this.isStepActive;
  }

  recipientSubmit(): void {
    if (this.recipientForm()?.invalid) {
      this.recipientForm()?.markAllAsTouched();
      alert('Please fill the all required fields');
      return;
    }

    this.recipientForm()?.reset();
    this._httpService.navigateByUrl('/dashboard');
  }
}
