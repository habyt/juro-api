/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contract } from './Contract';
import type { WebhookEvent } from './WebhookEvent';

export type WebhookResponse = {
    contract: Contract;
    event: WebhookEvent;
};

