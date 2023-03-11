/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Signature } from './Signature';

export type SigningSideRequest = {
    /**
     * unique id
     */
    uid: string;
    /**
     * name of the signing side - used for external types
     */
    name?: string;
    /**
     * list of signature items. Each signature represents a person on either “your” or 'their' side
     */
    signatures: Array<Signature>;
};

