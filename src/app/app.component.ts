import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected routerEvent: NavigationStart | null = null;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routerEvent = event
        console.log(this.routerEvent)
      }
    })
  }
}
