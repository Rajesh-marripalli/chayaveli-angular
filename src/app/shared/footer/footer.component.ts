import { Component } from '@angular/core';
import { STUDIO } from '../../core/studio.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly studio = STUDIO;
  readonly year = new Date().getFullYear();
}
