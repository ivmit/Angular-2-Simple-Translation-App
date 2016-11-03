/**
 * Importing Injectable decorator which marks the current service for dependency injection
 * Import Inject decorator in order to inject Translations multiProvider
 */

import { Injectable, Inject } from '@angular/core';
import { TRANSLATIONS } from './translation';

/**
 * Mark TranslateService as injectable
 */
@Injectable()
export class TranslateService{

    private _currentLang: string;

    /**
     * Getter for private property currentLang
     */
    public get currentLang() {

        return this._currentLang;

    }

    /**
     * TranslateService constructor sets the _translations variable to type any,
     * marks it as private and inject in it TRANSLATIONS multiPRovider
     */
    constructor(@Inject(TRANSLATIONS) private _translations: any) {

    }

    /**
     * Set currentLang to the selected language
     */
    public use(lang: string): void {

        this._currentLang = lang;

    }

    /**
     * return translation based on key and currentLang selected
     */
    private translate(key: string): string {

        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        return translation;
    }

    /**
     * getTranslation
     */
    public instant(key: string){

        return this.translate(key);
    }

}