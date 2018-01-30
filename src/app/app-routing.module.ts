import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

const routes: Routes = [
  {path: 'basic-layout', component: BasicLayoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
