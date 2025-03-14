import { Component, OnInit } from '@angular/core';
import PhotoSwipe from 'photoswipe';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initPhotoSwipe();
  }

  initPhotoSwipe() {
    const galleryElements = document.querySelectorAll('.gallery-item');
    const items: any[] = [];

    galleryElements.forEach((element) => {
      const link = element as HTMLAnchorElement;
      const size = link.getAttribute('data-size')?.split('x');
      const href = link.getAttribute('href');
      const src = link.querySelector('img')?.getAttribute('src') || '';

      if (href && size) {
        items.push({
          src: href,
          msrc: src,
          width: parseInt(size[0], 10),
          height: parseInt(size[1], 10),
          alt: link.querySelector('img')?.getAttribute('alt') || ''
        });
        
        // Add click event listener to open PhotoSwipe
        link.addEventListener('click', (e) => {
          e.preventDefault();
          this.openPhotoSwipe(items, items.indexOf(items.find(item => item.src === href)));
        });
      }
    });
  }

  openPhotoSwipe(items: any[], index: number) {
    const pswpElement = document.querySelector('.pswp') as HTMLElement;
    
    const options = {
      dataSource: items,
      index: index || 0,
      bgOpacity: 0.85,
      showHideOpacity: true,
      // Add any other options you need
    };
  
    const lightbox = new PhotoSwipe(options);
    
    // Initialize PhotoSwipe
    lightbox.init();
    
    // Optional: Add events
    lightbox.on('uiRegister', function() {
      // Add custom UI elements here if needed
    });
  }
}