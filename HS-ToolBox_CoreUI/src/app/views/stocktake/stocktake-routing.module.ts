import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StocktakeComponent } from "./stocktake.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Stocktake",
    },
    children: [
      // {
      //   path: "",
      //   redirectTo: "xxx",
      // },
      {
        path: "events",
        component: StocktakeComponent,
        data: {
          title: "Events",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocktakeRoutingModule {}
