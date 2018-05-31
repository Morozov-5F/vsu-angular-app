import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotsListComponent } from './pilots-list/pilots-list.component';

const routes: Routes = [
  { path: 'pilots', component: PilotsListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
