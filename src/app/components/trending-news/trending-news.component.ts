import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [],
  templateUrl: './trending-news.component.html',
  styleUrl: './trending-news.component.css'
})

export class TrendingNewsComponent {

  @Input() public text: string = 'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public img: string = '';
  @Input() public link: string = "";
}
