import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    this.githubUsers.load().subscribe(users => {
      this.users = users;
      console.log(this.users);
    })
  }
}