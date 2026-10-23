import { Component, HostListener, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { STUDIO } from '../../core/studio.config';

interface Photo {
  category: string;
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly studio = STUDIO;
  readonly filters = ['All', 'Wedding', 'Pre-Wedding', 'Fashion & Portraits', 'Baby'];
  readonly selectedFilter = signal('All');
  readonly selectedPhoto = signal<Photo | null>(null);
  readonly message = signal('This opens an email draft in your email application. No message is saved on the website yet.');
  readonly services = [
    {category:'Wedding',subtitle:'01 / The promise',title:'Weddings',src:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=850&q=85',alt:'Wedding photography'},
    {category:'Pre-Wedding',subtitle:'02 / Before forever',title:'Pre-Wedding',src:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=850&q=85',alt:'Pre-wedding couple'},
    {category:'Fashion & Portraits',subtitle:'03 / Your expression',title:'Fashion & Portraits',src:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=850&q=85',alt:'Fashion portrait'},
    {category:'Baby',subtitle:'04 / Little beginnings',title:'Baby Shoots',src:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=850&q=85',alt:'Baby photography'}
  ];
  readonly photos: Photo[] = [
    {category:'Wedding',src:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',alt:'Wedding celebration',caption:'Wedding / Forever begins',tall:true},
    {category:'Pre-Wedding',src:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85',alt:'Romantic pre-wedding session',caption:'Pre-Wedding / Two hearts'},
    {category:'Fashion & Portraits',src:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',alt:'Editorial portrait',caption:'Portraits / The muse',tall:true},
    {category:'Baby',src:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=85',alt:'Baby portrait',caption:'Baby / Little wonders'},
    {category:'Wedding',src:'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85',alt:'Romantic bride and groom',caption:'Wedding / The vows',tall:true},
    {category:'Fashion & Portraits',src:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85',alt:'Fashion portrait',caption:'Fashion / In focus'},
    {category:'Pre-Wedding',src:'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=85',alt:'Couple portrait',caption:'Pre-Wedding / In love'},
    {category:'Baby',src:'https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=1000&q=85',alt:'Baby moment',caption:'Baby / First memories'}
  ];
  readonly filteredPhotos = computed(() => {
    const filter = this.selectedFilter();
    return filter === 'All' ? this.photos : this.photos.filter(photo => photo.category === filter);
  });
  inquiry = { name:'', email:'', phone:'', session:'', message:'' };

  selectFilter(category: string): void { this.selectedFilter.set(category); }
  openPhoto(photo: Photo): void { this.selectedPhoto.set(photo); }
  closePhoto(): void { this.selectedPhoto.set(null); }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.closePhoto(); }

  submitInquiry(): void {
    const subject = encodeURIComponent(`Photography inquiry: ${this.inquiry.session}`);
    const body = encodeURIComponent(`Name: ${this.inquiry.name}\nEmail: ${this.inquiry.email}\nPhone: ${this.inquiry.phone}\nSession: ${this.inquiry.session}\n\nMessage:\n${this.inquiry.message}`);
    const to = this.studio.bookingEmail;
    this.message.set(to
      ? 'Your email application will open. Please send the draft to complete your inquiry.'
      : 'Your email application will open. Please enter the studio email address and send the draft; no inquiry is saved automatically.');
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }
}
