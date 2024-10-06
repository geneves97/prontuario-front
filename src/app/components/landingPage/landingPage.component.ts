import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    NgOptimizedImage
  ],
  providers: [],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {

}
