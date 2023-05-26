import { Component, OnInit } from '@angular/core';
import { TechStack } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public techStack: Array<TechStack> = new Array<TechStack>();

  public constructor() {

  }

  public ngOnInit(): void {
    // sort the skills
  }

}
