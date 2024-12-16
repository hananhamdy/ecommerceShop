import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: User | null = null;
  isMenuOpen = false;

  constructor() {
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  // Listen for window resize events
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  // Function to check screen size and update isMenuOpen
  private checkScreenSize(): void {
    this.isMenuOpen = window.innerWidth >= 1024;
  }

  // toggle menu button on mobile view
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
