import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
@Injectable({
  providedIn: "root",
})
export class GeneralService {
  fb = firebase.default;

  getTimeStamp() {
    return this.fb.firestore.FieldValue.serverTimestamp;
  }

  constructor() {}
}
