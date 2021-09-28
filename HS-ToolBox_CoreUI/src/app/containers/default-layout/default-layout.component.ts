import { Component } from "@angular/core";
import { navItems } from "../../_nav";
import { AuthService } from "@auth0/auth0-angular";
import { UserProfile } from "../../shared/models/user-profile";
@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  constructor(public auth: AuthService) {}
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  user: UserProfile = JSON.parse(localStorage.getItem("user"));

  signOut() {
    this.auth.logout();
  }
}
