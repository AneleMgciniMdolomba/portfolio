import { Component } from '@angular/core';
import { MenuItems } from './navigation.model';

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public title: string = 'Anele. M Mdolomba';
  public home: string = 'home';
  public menuItems: Array<MenuItems> = [];

  public constructor() {
    this.menuItems.push(
      {
        url: 'about',
        label: 'About'
      },
      {
        url: 'skills',
        label: 'Skills'
      },
      {
        url: 'projects',
        label: 'Projects'
      },
      {
        url: 'contact',
        label: 'Contact'
      },
      {
        url: 'blog',
        label: 'Blog'
      }

    );
  }

}
