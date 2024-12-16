import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NotAuthorizedGuard } from './core/guards/not-autherized.guard';
import { AuthorizedGuard } from './core/guards/autherized.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [NotAuthorizedGuard, AuthorizedGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';

  constructor(private _titleService:Title) {
    this._titleService.setTitle("E-commerce Shop");
    this.title = "E-commerce Shop";
  }
}
