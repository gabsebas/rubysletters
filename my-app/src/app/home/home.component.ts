import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NgIf, 
    NgFor
  ] 
})
export class HomeComponent {
  showLetters: boolean = false;
  showArtwork: boolean = false;

  letters = [
    { id: 1, message: 'Yeojin is amazing! Her energy brightens my day.' },
    { id: 2, message: 'Thank you for always inspiring us!' }
  ];

  toggleLetters(): void {
    this.showLetters = !this.showLetters;
    this.showArtwork = false;
  }

  toggleArtwork(): void {
    this.showArtwork = !this.showArtwork;
    this.showLetters = false;
  }
}
