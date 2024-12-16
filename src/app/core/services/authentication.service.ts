import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private userKey: string = "loggedInUser";

  public onLogout: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private localStorage: LocalStorage
  ) {}

  public getCurrentUser() {
    const user = this.localStorage.get(this.userKey);
    this.user.next(user as User | null);
    return this.user;
  }
  
  public signOut() {
    this.user.next(null);
    this.localStorage.remove(this.userKey);
    this.router.navigate(['/login']);
  }

  public isAuthorized() {
    return localStorage.getItem('loggedInUser') !== null
  }
}
