import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetActionBarComponent } from './widgets/widget-action-bar/widget-action-bar.component';
import { WidgetTextBoxComponent } from './widgets/widget-text-box/widget-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetActionBarComponent,
    WidgetTextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
