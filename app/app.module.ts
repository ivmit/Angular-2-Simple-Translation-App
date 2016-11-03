/**
 * Created by imitrache on 11/3/2016.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, TranslatePipe ],
    bootstrap: [ AppComponent ],
    providers: [ TRANSLATION_PROVIDERS, TranslateService ]
})

export class AppModule { }