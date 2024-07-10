import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BossesService } from "./services/bosses.service";

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule],
    exports: [],
    providers: [BossesService]
})
export class SharedModule {}