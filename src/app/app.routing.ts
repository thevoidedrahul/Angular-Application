import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

const ROUTES: Route[] = [
    {
        path: '', component: AppComponent, children: [
            { path: '', loadChildren: () => import('./page-component').then(mod => mod.PageModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }