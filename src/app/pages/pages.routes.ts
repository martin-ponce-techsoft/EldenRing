import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./bosses/bosses.module.ts').then(m => m.BossesModule)
            }
        ]
    }
];
 