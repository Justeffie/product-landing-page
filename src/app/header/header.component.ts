import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headerPics: string[] = [
    'assets/header-bag-1.png',
    'assets/header-bag-2.jpg',
    'assets/header-bag-3.jpg',
    'assets/header-bag-4.jpg'
  ];
  selectedPic: string;
  private carouselCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.carousel();
  }

  carousel() {
    if (this.carouselCounter == this.headerPics.length-1) this.carouselCounter = 0;

    this.selectedPic = this.headerPics[this.carouselCounter];
    this.carouselCounter++;

    setTimeout(() => this.carousel(), 5000);
  }
}
