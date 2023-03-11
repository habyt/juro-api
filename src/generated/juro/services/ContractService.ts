/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Answer } from '../models/Answer';
import type { Contract } from '../models/Contract';
import type { FieldRequest } from '../models/FieldRequest';
import type { SigningSideRequest } from '../models/SigningSideRequest';
import type { Table } from '../models/Table';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContractService {

    /**
     * Create contract
     * @returns any contract object response
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        /**
         * Create a contract
         */
        requestBody: {
            /**
             * id of template
             */
            templateId: string;
            contract: {
                /**
                 * list of field items
                 */
                answers?: Array<Answer>;
                /**
                 * list of field items
                 */
                fields?: Array<FieldRequest>;
                /**
                 * contract name
                 */
                name?: string;
                /**
                 * list of signing side items
                 */
                signingSides?: Array<SigningSideRequest>;
                /**
                 * list of table items
                 */
                tables?: Array<Table>;
            };
        },
    }): CancelablePromise<{
        contract: Contract;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contracts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Authentication failed`,
                404: `Not found`,
            },
        });
    }

    /**
     * Get a specific contract
     * @returns any contract object response
     * @throws ApiError
     */
    public static retrieve({
        id,
    }: {
        /**
         * ID of contract
         */
        id: string,
    }): CancelablePromise<{
        contract: Contract;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contracts/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Authentication failed`,
                404: `Not found`,
            },
        });
    }

    /**
     * This endpoint updates an existing contract.
     * @returns any contract object response
     * @throws ApiError
     */
    public static update({
        id,
        requestBody,
    }: {
        /**
         * The ID of the contract to make update request
         */
        id: string,
        /**
         * Update a contract
         */
        requestBody: {
            /**
             * list of field items
             */
            fields?: Array<FieldRequest>;
            /**
             * contract name
             */
            name?: string;
            /**
             * list of signing side items
             */
            signingSides?: Array<SigningSideRequest>;
            /**
             * list of table items
             */
            tables?: Array<Table>;
        },
    }): CancelablePromise<{
        contract: Contract;
    }> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/contracts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Authentication failed`,
                404: `Not found`,
            },
        });
    }

    /**
     * @returns any Default successful response
     * @throws ApiError
     */
    public static delete({
        id,
    }: {
        /**
         * The ID of the contract to delete
         */
        id: string,
    }): CancelablePromise<{
        message: 'ok';
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contracts/{id}',
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
