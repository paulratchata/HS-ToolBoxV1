import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { IconSetService } from "@coreui/icons-angular";
import { freeSet } from "@coreui/icons";
import { AuthService } from "@auth0/auth0-angular";
@Component({
  // tslint:disable-next-line
  selector: "body",
  template: "<router-outlet></router-outlet>",
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    public auth: AuthService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  user: any;

  ngOnInit() {
    //
    this.auth.user$.subscribe((res) => {
      this.user = JSON.stringify(res);
      localStorage.setItem("user", this.user);
    });
    //
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
