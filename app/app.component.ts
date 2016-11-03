/**
 * Created by imitrache on 11/3/2016.
 */

import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    public translatedText: string;
    public supportedLanguages: any[];

    constructor( private _translate: TranslateService ) { }

    isCurrentLang(lang: string){
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string){
       this._translate.use(lang);
    }

    refreshText(){
       this.translatedText = this._translate.instant('hello world');
    }

    subscribeToLangChanged(){
        return this._translate.onLangChanged.subscribe(x => this.refreshText());
    }

    ngOnInit(){



        this.supportedLanguages = [
            {
                display: 'English',
                value: 'en'
            },
            {
                display: 'Español',
                value: 'es'
            },
            {
                display: '华语',
                value: 'zh'
            },
        ];
        this.subscribeToLangChanged();
        this._translate.setDefaultLang('en-US');
        this._translate.enableFallback(true);

        this.selectLang(navigator.language);
    }
}