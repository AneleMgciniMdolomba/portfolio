import { Component, OnInit } from '@angular/core';
import { MenuItems } from './navigation.model';

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public title: string = 'Anele. M Mdolomba';
  public home: string = 'home';
  public menuItems: Array<MenuItems> = [];

  public constructor() {
    this.menuItems.push(
      {
        id: 'about',
        url: 'about',
        label: 'About',
        show: false
      },
      {
        id: 'blog',
        url: 'blog',
        label: 'Blog',
        show: false
      },
      {
        id: 'skills',
        url: 'skills',
        label: 'Skills',
        show: true
      },
      {
        id: 'projects',
        url: 'projects',
        label: 'Projects',
        show: true
      },
      {
        id: 'contact',
        url: 'contact',
        label: 'Contact',
        show: true
      }

    );
  }

  public ngOnInit(): void {
    // Filter menu items
    this.menuItems = this.menuItems.filter(item => {
      return item.show;
    })
  }

}
