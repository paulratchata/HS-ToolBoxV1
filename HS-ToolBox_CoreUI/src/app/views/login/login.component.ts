import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private router: Router
  ) {}

  loginForm: FormGroup;
  formVal: any;
  checking: boolean = false;

  ngOnInit() {
    if (!this.auth.isAuth) {
      this.router.navigate([""]);
    }

    this.loginForm = this.fb.group({
      username: [, Validators.required],
      password: [, Validators.required],
    });
  }

  loginWithRedirect(): void {
    this.auth.signIn();
  }
}
