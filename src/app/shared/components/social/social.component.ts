import { Component, OnInit } from '@angular/core';
import { SocialMediaLink } from './social.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socialMediaLinks: Array<SocialMediaLink> = new Array<SocialMediaLink>();
  private TARGET: '_blank' | '_self' = '_blank';

  public constructor() {
    this.socialMediaLinks.push(
      {
        id: 'github',
        show: true,
        icon: 'fa fa-github fa-2xl',
        target: this.TARGET,
        url: 'https://github.com/AneleMgciniMdolomba'
      },
      {
        id: 'twitter',
        show: true,
        icon: 'fa fa-twitter fa-2xl',
        target: this.TARGET,
        url: 'https://twitter.com/MgciniMdolomba'
      },
      {
        id: 'linkedin',
        show: true,
        icon: 'fa fa-linkedin fa-2xl',
        target: this.TARGET,
        url: 'https://linkedin.com/in/anelemdolomba/'
      },
      {
        id: 'facebook',
        show: false,
        icon: 'fa fa-facebook fa-2xl',
        target: this.TARGET,
        url: 'https://facebook.com/MgciniMdolomba'
      },{
        id: 'instagram',
        show: false,
        icon: 'fa fa-instagram fa-2xl',
        target: this.TARGET,
        url: 'https://instagram.com/MgciniMdolomba'
      },
    );
  }

  public ngOnInit(): void {
      this.socialMediaLinks = this.socialMediaLinks.filter(items => {
        return items.show
      });
  }
}
