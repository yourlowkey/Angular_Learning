import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HeaderComponent } from './components/header/header.component';
import { ProtectLayoutComponent } from 'src/styles/layout/protected-layout/protect-layout/protect-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    ProtectLayoutComponent
    // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot([]),
    HttpClientModule,
    TranslocoRootModule,
    HeaderComponent
  ]
})
export class AppModule {}
