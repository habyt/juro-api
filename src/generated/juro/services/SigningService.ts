/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SigningService {

    /**
     * This endpoint allows for signing of a contract.
     * @returns any Default successful response
     * @throws ApiError
     */
    public static sign({
        id,
        requestBody,
    }: {
        /**
         * The ID of the contract to sign
         */
        id: string,
        /**
         * Sign a contract
         */
        requestBody: {
            /**
             * signature image encoded in base64
             */
            signatureBase64: string;
        },
    }): CancelablePromise<{
        message: 'ok';
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contracts/{id}/sign',
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
     * Send a contract for signing.
     * @returns any Default successful response
     * @throws ApiError
     */
    public static sendForSigning({
        id,
        signingSideUid,
        requestBody,
    }: {
        /**
         * The ID of the contract to send for signing
         */
        id: string,
        /**
         * The UID of the signing side to send to for signing
         */
        signingSideUid: string,
        requestBody: {
            /**
             * personalized message included in email body
             */
            message: string;
        },
    }): CancelablePromise<{
        message: 'ok';
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contracts/:id/signing-request/:signing_side_uid',
            path: {
                'id': id,
                'signing_side_uid': signingSideUid,
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
     * Send a contract for signing to a certain signatory.
     * @returns any Default successful response
     * @throws ApiError
     */
    public static sendForSigningByCertainSignatory({
        id,
        signingSideUid,
        signatureUid,
        requestBody,
    }: {
        /**
         * The ID of the contract to send for signing
         */
        id: string,
        /**
         * The UID of the signing side to send to for signing
         */
        signingSideUid: string,
        /**
         * The UID of the signing side's signature to send to for signing
         */
        signatureUid: string,
        requestBody: {
            /**
             * personalized message included in email body
             */
            message: string;
        },
    }): CancelablePromise<{
        message: 'ok';
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contracts/:id/signing-request/:signing_side_uid/signatures/:signature_uid',
            path: {
                'id': id,
                'signing_side_uid': signingSideUid,
                'signature_uid': signatureUid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Authentication failed`,
                404: `Not found`,
            },
        });
    }

}
