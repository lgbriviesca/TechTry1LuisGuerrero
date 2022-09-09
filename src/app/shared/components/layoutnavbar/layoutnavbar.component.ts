import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layoutnavbar',
  templateUrl: './layoutnavbar.component.html',
  styleUrls: ['./layoutnavbar.component.css'],
})
export class LayoutnavbarComponent implements OnInit {
  navRol1 = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'breakingbad',
      url: '/breakingbad',
    },
    {
      name: 'booking',
      url: '/booking',
    },
  ];
  navRol2 = [
    {
      name: 'shorterlink',
      url: '/shorterlink',
    },
  ];
  items: any = [];
  constructor(private router: Router) {}

  validateRoles() {
    const validation = localStorage.getItem('rol');
    if (validation === 'ROL-A') {
      this.items = this.navRol1;
    } else this.items = this.navRol2;
  }

  ngOnInit(): void {
    this.validateRoles();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
