import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {
  users: User;

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {}

  ngOnInit(): void {
    this.githubUsers.load().subscribe(res => {
      this.users = res;
    });
  }

}