import { CommonModule } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { ShellComponent } from "./shell/shell.component";
import { routes } from "./pages.routes";

@NgModule({
    declarations: [PagesComponent, ShellComponent],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes)
    ],
    bootstrap: [PagesComponent],
    providers: [provideHttpClient()]
  })
  export class PagesModule { }
   