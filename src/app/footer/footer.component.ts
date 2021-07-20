import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialMedias: Object[] = [
    {src: 'assets/facebook.png', description: 'Facebook'},
    {src: 'assets/twitter.png', description: 'Twitter'},
    {src: 'assets/instagram.png', description: 'Instagram'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
