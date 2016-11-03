/**
 * import OpaqueToken fom angular core
 */
import { OpaqueToken } from '@angular/core';

/**
 * import all defined translations
 */
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';

/**
 * Create a new opaque token.
 * An opaque token is an object that has no application interfaces.
 * It's a special kind of provider lookup key used in dependecy injection
 */
export const TRANSLATIONS = new OpaqueToken('translations');

/**
 * Object with all translations to be used as multiproviders or translations provider
 */
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
    [LANG_ZH_NAME]: LANG_ZH_TRANS
};

/**
 * Set the translations as the multiProvider with dictionary as values providers.
 */
export const TRANSLATION_PROVIDERS = [
    {
        provide:TRANSLATIONS, useValue: dictionary
    }
];