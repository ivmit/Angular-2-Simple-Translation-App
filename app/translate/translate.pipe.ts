/**
 * Created by imitrache on 11/3/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

/**
 * Pipes take input and transform it to a desired output
 * Sets Pipe name to translate with Pipe decorator
 */
@Pipe({
    name: 'translate',
    pure: false //making the pipe impure will update on click
})

/**
 * In order to set a custom Pipe, PipeTransform must be implemented which calls transform method on a value as
 * a first parameter and multiple arguments(array) as second
 */
export class TranslatePipe implements PipeTransform {

    /**
     * Set TranslatePipe constructor
     */
    constructor(private _translate: TranslateService){ }

    /**
     * translate the value passed to the pipe
     */
    transform(value: string, args: string | string[]): any {
        if (!value) return;
        return this._translate.instant(value, args);
    }

}
