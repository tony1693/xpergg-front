import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [],
  templateUrl: './trending-news.component.html',
  styleUrl: './trending-news.component.css'
})

export class TrendingNewsComponent {

  @Input() public apiNewsText: string = 'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public apiNewsImg: string = 'https://media.vandal.net/i/150x100/6-2023/20236121753490_1.jpg';
  @Input() public linkApiNewsRouting: string = "";
}