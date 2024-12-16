import { Title } from '@angular/platform-browser';
import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';
import { UsersResponse } from './users';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  loginForm: FormGroup = new FormGroup({});

  constructor(private _titleService:Title, private _formBuilder: FormBuilder, private _router: Router, private _authenticationService: AuthenticationService) {
    this._titleService.setTitle("Login");
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this._formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitLoginForm() {
    const usernameInput = this.loginForm.get('username')?.value;
    const passwordInput = this.loginForm.get('password')?.value;
    const user = UsersResponse.find((user) => user.username === usernameInput && user.password === passwordInput);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this._authenticationService.user.next(user);
      this._router.navigate(['/home']);
    } else {
      this._snackBar.open('Invalid credentials', 'Close', {
        duration: 2000,
      });
    }
  }
}
