import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HeaderComponent } from './components/header/header.component';
import { AssessmentModule } from './services';
//Services

@NgModule({
    declarations: [
        AppComponent,
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
        HeaderComponent,
        AssessmentModule.forRoot()
    ]
})
export class AppModule { }
