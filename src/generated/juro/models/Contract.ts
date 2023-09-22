/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DraftLink } from './DraftLink';
import type { FieldResponse } from './FieldResponse';
import type { Question } from './Question';
import type { SigningSideResponse } from './SigningSideResponse';
import type { Table } from './Table';

export type Contract = {
    /**
     * contract id
     */
    id: string;
    /**
     * document creation date
     */
    createdDate: string;
    draftLink: DraftLink;
    /**
     * list of field items
     */
    fields: Array<FieldResponse>;
    /**
     * url for signed in Juro users
     */
    internalUrl: string;
    /**
     * template name
     */
    name: string;
    /**
     * contract owner's name
     */
    owner?: {
        /**
         * owner name
         */
        name: string;
        /**
         * owner username
         */
        username: string;
    };
    /**
     * list of question items
     */
    questions: Array<Question>;
    /**
     * url you would share with the outside world e.g. anonymous users
     */
    sharingUrl: string;
    /**
     * list of signing side items
     */
    signingSides: Array<SigningSideResponse>;
    /**
     * document state
     */
    state: any;
    status: 'draft' | 'sent for approval' | 'approved' | 'rejected' | 'sent for signing' | 'signed by us' | 'signed by them' | 'fully signed';
    /**
     * list of table items
     */
    tables?: Array<Table>;
    team?: {
        /**
         * team id
         */
        id: string;
        /**
         * team name
         */
        name: string;
    };
    template?: {
        /**
         * template id
         */
        id: string;
        /**
         * template name
         */
        name: string;
    };
    /**
     * date when document was last updated
     */
    updatedDate: string;
};

