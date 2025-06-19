import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../pages.styles.scss'],
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    ReactiveFormsModule,
  ],
})
export class RegisterComponent {
  signupForm!: FormGroup;
  private _fb = inject(FormBuilder);

  ngOnInit() {
    this.signupForm = this._fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ]),
      ],
      remember: [false, [Validators.requiredTrue]],
    });
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }

  signUp() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
