import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public image: string = 'assets/img/profile.jpg';
  public altText: string = 'Hero Profile';
  public class: string = '';
  public loading: 'lazy' | 'eager' = 'lazy';
  public title: string = 'About Me!';

  public about: string = 'I\'m a software engineer based in South Africa, with a demonstrated history of working in the information technology and services industry.I\'ve worked with a variety of programming languages such as Java, Python, and JavaScript, as well as with cloud-based software development across different industries including Cloud Call Centres, Customs and Retail.';

  more: string = 'Well testing html <strong>tags</strong> <br>.Did it work?<br>Yes';
}
