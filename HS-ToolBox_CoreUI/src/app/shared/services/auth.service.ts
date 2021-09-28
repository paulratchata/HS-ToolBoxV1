import { Injectable, NgZone } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AuthService as authServ } from "@auth0/auth0-angular";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public authserv: authServ
  ) {}

  profileJson: any;

  signIn() {
    try {
      // this.authserv.loginWithRedirect();
    } catch (error) {
      console.log(error);
    }
  }

  getUser() {
    this.authserv.user$.subscribe((profile) => {
      console.log(profile);
      this.profileJson = JSON.stringify(profile);
      return this.profileJson;
    });
  }

  signOut() {
    this.authserv.logout();
  }

  isAuth() {
    return this.authserv.isAuthenticated$;
  }
}
