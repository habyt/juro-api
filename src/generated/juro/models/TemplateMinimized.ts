/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateMinimized = {
    /**
     * template id
     */
    id: string;
    /**
     * document creation date
     */
    createdDate: string;
    /**
     * template name
     */
    name: string;
    /**
     * edit in progress or published document status
     */
    status: 'edit in progress' | 'published';
    /**
     * date when document was last updated
     */
    updateDate: string;
};

