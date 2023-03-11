/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Question = {
    /**
     * unique question id
     */
    uid: string;
    /**
     * a field uid, which will be populated after passing Q&A
     */
    fieldUid?: string;
    /**
     * signals that this question cannot be skipped in Q&A for a list of signing side s
     */
    isRequired: string;
    /**
     * this question s takes part for a list of signing side s when they are passing Q&A
     */
    signingSideUids: Array<string>;
    /**
     * question text helper, which should assist person with how this question should be answered
     */
    text?: string;
    /**
     * main question text - e.g. What is your name?
     */
    title: string;
};

