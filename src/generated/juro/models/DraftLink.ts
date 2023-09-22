/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DraftLink = {
    /**
     * draft link you would share with the outside world e.g. anonymous users
     */
    url: string;
    /**
     * draft link can be disabled which cuts contract's access from the outside world
     */
    isEnabled: boolean;
    /**
     * draft link can be enabled until provided date which cuts contract's access from the outside world after date has passed
     */
    enabledUntilDate?: string;
};

