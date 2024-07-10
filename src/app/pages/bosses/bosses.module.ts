import { NgModule } from "@angular/core";
import { BossesComponent } from "./bosses.component";
import { CommonModule } from "@angular/common";
import { BossesListComponent } from "./bosses-list/bosses-list.component";
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routes } from "../pages.routes";

@NgModule({
    declarations: [
        BossesComponent,
        BossesListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    bootstrap: [BossesComponent]
})
export class BossesModule { }