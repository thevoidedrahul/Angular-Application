import { Route, RouterModule } from "@angular/router";
import { PageComponent } from "./page-component";
import { NgModule } from "@angular/core";

const ROUTES: Route[] = [
    {
        path: '', component: PageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
  })
  
  export class PageRoutingModule { }