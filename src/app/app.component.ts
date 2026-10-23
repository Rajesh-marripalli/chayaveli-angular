import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent],
  template: `
    <app-header />
    <app-home />
    <app-footer />
  `
})
export class AppComponent {}
