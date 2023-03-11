/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DraftLink } from './DraftLink';
import type { FieldResponse } from './FieldResponse';
import type { Question } from './Question';
import type { SigningSideResponse } from './SigningSideResponse';

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
    updateDate: string;
};

