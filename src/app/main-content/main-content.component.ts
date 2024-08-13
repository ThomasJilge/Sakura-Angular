import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { landingPageComponent } from '../landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    landingPageComponent,
    OurMenuComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
