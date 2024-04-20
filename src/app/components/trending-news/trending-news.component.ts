import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [],
  templateUrl: './trending-news.component.html',
  styleUrl: './trending-news.component.css'
})

export class TrendingNewsComponent {

  @Input() public apiNewsText: string = '';
  @Input() public apiNewsImg: string = '';
  @Input() public linkApiNewsRouting: string = "";
}
