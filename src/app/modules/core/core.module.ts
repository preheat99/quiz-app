import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftNavComponent
  ]
})
export class CoreModule { }
