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
  // Studio's official profiles. Keep these here so replacing these two files is enough.
  readonly instagramUrl = 'https://www.instagram.com/chayaveli_photography/';
  readonly youtubeUrl = 'https://www.youtube.com/@chayaveliphotography';
  readonly whatsappNumber = '918333030838';
  readonly whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('Hello Chayaveli Photography! Please share your photography packages and availability.')}`;
  readonly message = signal('Complete the form and choose WhatsApp. You can review the message before sending it.');
  readonly services = [
    {category:'Wedding',subtitle:'01 / The promise',title:'Weddings',src:'images/taj-17.jpg',alt:'Wedding photography'},
    {category:'Pre-Wedding',subtitle:'02 / Before forever',title:'Pre-Wedding',src:'images/taj-01.jpg',alt:'Pre-wedding couple'},
    {category:'Fashion & Portraits',subtitle:'03 / Your expression',title:'Fashion & Portraits',src:'images/taj-10.jpg',alt:'Fashion portrait'},
    {category:'Baby',subtitle:'04 / Little beginnings',title:'Baby Shoots',src:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=850&q=85',alt:'Baby photography'}
  ];
  readonly photos: Photo[] = [
    {category:'Pre-Wedding',src:'images/taj-01.jpg',alt:'Sunlit silhouette',caption:'Pre-Wedding / Love in the light',tall:true},
    {category:'Wedding',src:'images/taj-02.jpg',alt:'Wedding album cover',caption:'Wedding / Together forever',tall:false},
    {category:'Pre-Wedding',src:'images/taj-03.jpg',alt:'Couple at the celebration',caption:'Pre-Wedding / A shared beginning',tall:false},
    {category:'Wedding',src:'images/taj-04.jpg',alt:'Bridal preparation portraits',caption:'Wedding / The bride',tall:true},
    {category:'Pre-Wedding',src:'images/taj-05.jpg',alt:'Couple portraits',caption:'Pre-Wedding / Side by side',tall:false},
    {category:'Fashion & Portraits',src:'images/taj-06.jpg',alt:'Groom editorial portraits',caption:'Fashion & Portraits / The groom',tall:false},
    {category:'Fashion & Portraits',src:'images/taj-07.jpg',alt:'Bridal portrait grid',caption:'Fashion & Portraits / Bridal beauty',tall:true},
    {category:'Fashion & Portraits',src:'images/taj-08.jpg',alt:'Bridal portrait composition',caption:'Fashion & Portraits / Golden elegance',tall:false},
    {category:'Fashion & Portraits',src:'images/taj-09.jpg',alt:'Groom portrait',caption:'Fashion & Portraits / Classic portrait',tall:false},
    {category:'Fashion & Portraits',src:'images/taj-10.jpg',alt:'Bridal fashion portrait',caption:'Fashion & Portraits / Radiant bride',tall:true},
    {category:'Pre-Wedding',src:'images/taj-11.jpg',alt:'Couple close-up',caption:'Pre-Wedding / A stolen glance',tall:false},
    {category:'Fashion & Portraits',src:'images/taj-12.jpg',alt:'Bridal portrait gallery',caption:'Fashion & Portraits / Golden moments',tall:false},
    {category:'Wedding',src:'images/taj-13.jpg',alt:'Wedding couple holding hands',caption:'Wedding / Together',tall:true},
    {category:'Wedding',src:'images/taj-14.jpg',alt:'Traditional wedding ceremony',caption:'Wedding / Wedding rituals',tall:false},
    {category:'Wedding',src:'images/taj-15.jpg',alt:'Wedding couple in garden',caption:'Wedding / The journey',tall:false},
    {category:'Wedding',src:'images/taj-16.jpg',alt:'Bridal henna close-up',caption:'Wedding / Beautiful details',tall:true},
    {category:'Wedding',src:'images/taj-17.jpg',alt:'Family at wedding ceremony',caption:'Wedding / Joyful blessings',tall:false},
    {category:'Wedding',src:'images/taj-18.jpg',alt:'Wedding couple walking away',caption:'Wedding / Hand in hand',tall:false},
    {category:'Wedding',src:'images/taj-19.jpg',alt:'Wedding ritual celebration',caption:'Wedding / Sacred moments',tall:true},
    {category:'Wedding',src:'images/taj-20.jpg',alt:'Wedding couple candid',caption:'Wedding / Happy tears',tall:false},
    {category:'Wedding',src:'images/taj-21.jpg',alt:'Family wedding celebration',caption:'Wedding / Shared joy',tall:false},
    {category:'Wedding',src:'images/taj-22.jpg',alt:'Hands held together',caption:'Wedding / Forever',tall:true},
    {category:'Baby',src:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=85',alt:'Sample baby photography (replace with studio photo)',caption:'Baby / Sample photo'}
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

  // Opens WhatsApp with a prepared inquiry. The visitor must still press Send.
  submitInquiry(): void {
    const inquiryText = [
      'Hello Chayaveli Photography! I would like to enquire about a photography session.',
      `Name: ${this.inquiry.name.trim()}`,
      `Email: ${this.inquiry.email.trim()}`,
      `Phone: ${this.inquiry.phone.trim() || 'Not provided'}`,
      `Session: ${this.inquiry.session}`,
      `Message: ${this.inquiry.message.trim() || 'Please share package details and availability.'}`
    ].join('\n');

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(inquiryText)}`;
    this.message.set('A WhatsApp message draft is opening. Please press Send in WhatsApp to complete your inquiry.');
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
