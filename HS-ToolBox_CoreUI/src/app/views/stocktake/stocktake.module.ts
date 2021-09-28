import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StocktakeRoutingModule } from "./stocktake-routing.module";
import { StocktakeComponent } from "./stocktake.component";

// Modal Component
import { ModalModule } from "ngx-bootstrap/modal";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [StocktakeComponent],
  imports: [
    CommonModule,
    StocktakeRoutingModule,
    ModalModule,
    ReactiveFormsModule,
  ],
})
export class StocktakeModule {}
