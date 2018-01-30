import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ElModule必须和BrowserAnimationsModule一起被添加，不然动画效果没法展示，排版也会有问题
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BasicContainerComponent } from './basic-container/basic-container.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    BasicContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
