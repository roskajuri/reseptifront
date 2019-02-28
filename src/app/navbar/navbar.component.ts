
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { GlobalService } from '../service/global.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private global: GlobalService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  logoutClicked() {
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }
}
