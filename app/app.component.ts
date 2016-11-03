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
        this.refreshText();
    }

    refreshText(){
       this.translatedText = this._translate.instant('hello world');
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

        this.selectLang(navigator.language);
    }
}