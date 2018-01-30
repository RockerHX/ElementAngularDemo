import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BasicContainerComponent } from './basic-container/basic-container.component';

const routes: Routes = [
  {path: 'basic-layout', component: BasicLayoutComponent},
  {path: 'basic-container', component: BasicContainerComponent}
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
