/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Template } from '../models/Template';
import type { TemplateMinimized } from '../models/TemplateMinimized';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TemplateService {

    /**
     * Get all available templates
     * You first want to get all templates to correctly select the one that you are going to use to create your contract.
     * @returns any All templates listed
     * @throws ApiError
     */
    public static list(): CancelablePromise<{
        templates: Array<TemplateMinimized>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/templates',
            errors: {
                403: `Authentication failed`,
            },
        });
    }

    /**
     * Get a specific template
     * @returns any Retrieves a specific template.
     * @throws ApiError
     */
    public static retrieve({
        id,
    }: {
        /**
         * ID of template
         */
        id: string,
    }): CancelablePromise<{
        template: Template;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/templates/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Authentication failed`,
                404: `Not found`,
            },
        });
    }

}
