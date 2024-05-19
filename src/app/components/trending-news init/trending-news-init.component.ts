import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-news-init',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-news-init.component.html',
  styleUrl: './trending-news-init.component.css'
})

export class TrendingNewsInitComponent {

  @Input() public text: string = '';
  @Input() public img: string = '';
  @Input() public link: string = "";

  public isInitPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isInitPage = this.router.url === '/init';
  }
}
