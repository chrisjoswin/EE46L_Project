import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { DeveloperComponent } from '../developer/developer.component';
import { Developer } from '../developer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  blankPhoto = 'https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png';

  developers: Developer[] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Christopher Erattuparambil', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Josh Kall', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Haosong Li', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Jacob Grimm', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Jerad Robles', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'William Gu', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
  ];

  commits = {
    jacob: 0,
    chris: 0,
    jerad: 0,
    william: 0,
    haosong: 0,
    josh: 0
  };

  issues = {
    jacob: 0,
    chris: 0,
    jerad: 0,
    william: 0,
    haosong: 0,
    josh: 0
  };

  numCommits = 0;
  numIssues = 0;

  statsHandler = {
    next: data => {
      let contributor;
      for (contributor of data) {
        this.numCommits += contributor.total;
        switch (contributor.author.login) {
          case 'jacobgrimm':
            this.commits.jacob = contributor.total;
            this.developers[3].numCommits = contributor.total;
            break;
          case 'Minalinnski':
            this.commits.william = contributor.total;
            this.developers[5].numCommits = contributor.total;
            break;
          case 'chrisjoswin':
            this.commits.chris = contributor.total;
            this.developers[0].numCommits = contributor.total;
            break;
          case 'JSRobles':
            this.commits.jerad = contributor.total;
            this.developers[4].numCommits = contributor.total;
            break;
          case 'hdlee9885':
            this.commits.haosong = contributor.total;
            this.developers[2].numCommits = contributor.total;
            break;
          case 'j-ka11':
            this.commits.josh = contributor.total;
            this.developers[1].numCommits = contributor.total;
            break;
        }
      }
    }

  };

  issuesHandler = {
    next: data => {
      let issue;
      for (issue of data) {
        this.numIssues++;
        switch (issue.user.login) {
          case 'jacobgrimm':
            this.issues.jacob++;
            this.developers[3].numIssues++;
            break;
          case 'Minalinnski':
            this.issues.william++;
            this.developers[5].numIssues++;
            break;
          case 'chrisjoswin':
            this.issues.chris++;
            this.developers[0].numIssues++;
            break;
          case 'JSRobles':
            this.issues.jerad++;
            this.developers[4].numIssues++;
            break;
          case 'hdlee9885':
            this.issues.haosong++;
            this.developers[2].numIssues++;
            break;
          case 'j-ka11':
            this.issues.josh++;
            this.developers[0].numIssues++;
            break;
        }
      }
    }
  };

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getStats().subscribe(this.statsHandler);
    this.aboutService.getIssues().subscribe(this.issuesHandler);
  }
}


