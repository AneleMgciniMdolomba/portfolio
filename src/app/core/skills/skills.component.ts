import { Component, OnInit } from '@angular/core';
import { TechStack } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  private techStack: Array<TechStack> = new Array<TechStack>();

  public top: Array<TechStack>;
  public bottom: Array<TechStack>;

  public constructor() {
    this.techStack.push(
      {
        id: 'java',
        descriptions: 'Brief java description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/java.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },      {
        id: 'Spring Framework',
        descriptions: 'Brief spring framework description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/corespring.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },      {
        id: 'git',
        descriptions: 'Brief git description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/git.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },      {
        id: 'angular',
        descriptions: 'Brief angular description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/angular.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },      {
        id: 'typscript',
        descriptions: 'Brief typescript description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/typescript.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },      {
        id: 'docker',
        descriptions: 'Brief docker description...',
        rank: 'FREQUENT',
        url: 'assets/img/tech/docker.png',
        external: 'https://docs.oracle.com/en/java/javase/17/docs/api/'
      },
    )

    this.top = new Array<TechStack>(3);
    this.bottom = new Array<TechStack>(3);
  }

  public ngOnInit(): void {
    // sort the skills & split
    this.top = this.techStack.slice(0, 3);
    this.bottom = this.techStack.slice(3, 6);

    console.log('list of skills => ', this.top, this.bottom);
  }

}
