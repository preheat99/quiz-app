import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from 'src/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected links: Link[] = [
    { name: 'Home', enabled: true, url: 'home' },
    { name: 'Contact', enabled: true, url: 'contact' },
    { name: 'About', enabled: true, url: 'about' },
    { name: 'Login', enabled: true, url: 'login' },
  ]
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  protected onLinkClick(link: Link): void {
    this._router.navigate([link.url])
  }

}
