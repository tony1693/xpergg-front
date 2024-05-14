import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-news.component.html',
  styleUrl: './trending-news.component.css'
})

export class TrendingNewsComponent {

  @Input() public text: string = '';
  @Input() public img: string = '';
  @Input() public link: string = "";

  public isInitPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isInitPage = this.router.url === '/init';
  }
}
