/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookEvent = {
    type: 'contract.created' | 'contract.deleted' | 'contract.edit' | 'contract.commented' | 'contract.viewed' | 'contract.pdf_generated' | 'contract.sent_link_to_counterparty' | 'contract.signed' | 'contract.approval_requested' | 'contract.approval_in_progress' | 'contract.approval_process_finished' | 'contract.approval_denied' | 'contract.approval_request_cancelled';
};

