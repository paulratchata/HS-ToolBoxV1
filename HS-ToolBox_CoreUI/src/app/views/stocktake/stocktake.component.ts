import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { stockTakeEvMod } from "../../shared/models/stockTakeEvent.models";

import { AngularFirestore } from "@angular/fire/firestore";
import { UserProfile } from "../../shared/models/user-profile";
import { stocTakeType } from "../../shared/models/stockTakeEvent.models";
@Component({
  selector: "app-stocktake",
  templateUrl: "./stocktake.component.html",
  styleUrls: ["./stocktake.component.scss"],
})
export class StocktakeComponent implements OnInit {
  constructor(private fb: FormBuilder, private afs: AngularFirestore) {
    this.timeStamp = new Date();
  }

  evForm: FormGroup;
  evType = stockTakeEvMod;
  eventId: string;
  timeStamp: Date;
  user: UserProfile = JSON.parse(localStorage.getItem("user"));
  eventData$: stocTakeType;

  @ViewChild("createEv") public createEvModal: ModalDirective;

  ngOnInit(): void {
    this.evForm = this.fb.group({
      date: [this.timeStamp],
      type: [, [Validators.required]],
      eventName: [, [Validators.required]],
      user: [this.user.nickname],
      eventID: [Math.floor(Math.random() * 1987)],
    });

    this.afs
      .collection<stocTakeType>("stockTakeEvent")
      .doc()
      .valueChanges({ idField: "idField" })
      .subscribe((res) => {
        this.eventData$ = res;
      });
  }

  createEvent() {
    try {
      this.afs
        .collection<stocTakeType>("stockTakeEvent")
        .doc()
        .set(this.evForm.value);
      this.createEvModal.hide();
    } catch (error) {
      alert("saving data failed!");
    }
  }
}
