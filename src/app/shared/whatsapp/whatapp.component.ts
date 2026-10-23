import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  template: `
    <a
      class="whatsapp-button"
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chayaveli Photography on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path fill="currentColor" d="M16 2C8.3 2 2 8.1 2 15.7c0 2.5.7 4.8 2 6.9L2.7 30l7.6-2a14.3 14.3 0 0 0 5.7 1.2c7.7 0 14-6.1 14-13.7S23.7 2 16 2zm0 24.7c-2 0-4-.5-5.7-1.6l-.5-.3-4.1 1.1 1.1-4-.3-.5a11.1 11.1 0 0 1-1.8-5.7C4.7 9.6 9.8 4.6 16 4.6s11.3 5 11.3 11.1-5.1 11-11.3 11zm6.1-8.1c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.4-.2-1.4-.5-2.7-1.7-1-1-1.7-2-1.9-2.4-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1.1-2.5c-.3-.6-.5-.5-.7-.5h-.6c-.3 0-.6.1-.9.4-.4.4-1.2 1.2-1.2 2.8s1.2 3.1 1.4 3.3c.2.2 2.4 3.7 5.8 5 2.9 1.2 3.4 1 4 .9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.4-.3-.7-.5z"/>
      </svg>
      <span></span>
    </a>
  `,
  styles: [`
    .whatsapp-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 22px;
      border-radius: 40px;
      background: #20c667;
      color: white;
      font: 700 15px Arial, sans-serif;
      text-decoration: none;
      box-shadow: 0 8px 25px rgba(0,0,0,.25);
      transition: transform .2s, background .2s;
    }
    .whatsapp-button:hover {
      transform: translateY(-3px);
      background: #16a957;
    }
    .whatsapp-button:focus-visible {
      outline: 3px solid #ffffff;
      outline-offset: 3px;
    }
    @media (max-width: 600px) {
      .whatsapp-button {
        right: 15px;
        bottom: 15px;
        padding: 12px 16px;
      }
    }
  `]
})
export class WhatsappComponent {
  private readonly phoneNumber = '918333030838';
  private readonly message =
    'Hi Chayaveli Photography! I visited your website. ' +
    'Please share your photography packages and availability.';

  readonly whatsappUrl =
    `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
}
