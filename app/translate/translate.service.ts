/**
 * Importing Injectable decorator which marks the current service for dependency injection
 * Import Inject decorator in order to inject Translations multiProvider
 */

import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translation';

/**
 * Mark TranslateService as injectable
 */
@Injectable()
export class TranslateService{

    private _currentLang: string;
    private PLACEHOLDER = '%';
    private _defaultLang: string;
    private _fallback: boolean;
    /**
     * Getter for private property currentLang
     */
    public get currentLang() {
        return this._currentLang || this._defaultLang;
    }

    public enableFallback(enable: boolean){
        this._fallback = enable;
    }

    public setDefaultLang(lang: string){
        this._defaultLang = lang;
    }

    /**
     * TranslateService constructor sets the _translations variable to type any,
     * marks it as private and inject in it TRANSLATIONS multiPRovider
     */
    constructor(@Inject(TRANSLATIONS) private _translations: any) {

    }


    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();


    /**
     * Set currentLang to the selected language
     */
    public use(lang: string): void {
        this._currentLang = lang;
       this.onLangChanged.emit(lang);
    }

    /**
     * return translation based on key and currentLang selected
     */
    private translate(key: string): string {
        let translation = key;

        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        // fallback disabled
        if (!this._fallback) {
            return translation;
        }

        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }

        // not found
        return translation;
    }

    /**
     * getTranslation
     */
    public instant(key: string, words?: string | string[]){
        const translation: string = this.translate(key);

        if(!words) return translation;
        return this.replace(translation, words);

    }

    private replace(word: string = '', words: string | string[] = ''){
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e,i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }

}