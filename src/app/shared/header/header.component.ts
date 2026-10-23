import { Component, signal } from '@angular/core';
import { STUDIO } from '../../core/studio.config';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly studio = STUDIO;
  readonly menuOpen = signal(false);
  closeMenu(): void { this.menuOpen.set(false); }
}
