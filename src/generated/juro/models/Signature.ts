/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Each signature represents a person on either 'your' or 'their' side
 */
export type Signature = {
    /**
     * unique id
     */
    uid: string;
    /**
     * email of the person that that is on 'their' side
     */
    email?: string | null;
    /**
     * name of the person on 'their' side
     */
    name?: string | null;
    /**
     * url you would share with the person on 'their' side to capture a signature or gather data from completing Q&A
     */
    signingUrl?: string;
    /**
     * signed in Juro username on 'your' side
     */
    username?: string;
};

