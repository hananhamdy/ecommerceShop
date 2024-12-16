import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { User } from '../../core/interfaces/user.interface';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: User | null = null;

  constructor(private _titleService:Title, private _authenticationService: AuthenticationService) {
    this._titleService.setTitle("My Profile");
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
}
