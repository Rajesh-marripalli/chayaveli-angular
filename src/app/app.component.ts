import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { WhatsappComponent } from './shared/whatsapp/whatapp.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, WhatsappComponent],
  template: `
    <app-header />
    <app-home />
    <app-footer />
    <app-whatsapp />
  `
})
export class AppComponent {}