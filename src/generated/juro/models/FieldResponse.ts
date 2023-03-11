/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FieldResponse = {
    /**
     * unique id
     */
    uid: string;
    /**
     * smartfield title
     */
    title: string;
    /**
     * smartfield type calendar, choice, companies, email, number, text, text area
     */
    type: 'calendar' | 'choice' | 'companies' | 'email' | 'number' | 'text' | 'text area';
    /**
     * smartfield value
     */
    value: string;
    /**
     * list of values and is particularly used only for choice type field
     */
    choices?: Array<string>;
};

