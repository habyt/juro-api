/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * Health check
     * Health check
     * @returns any Default successful response
     * @throws ApiError
     */
    public static healthCheck(): CancelablePromise<{
        message: 'ok';
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
            errors: {
                403: `Authentication failed`,
            },
        });
    }

}
