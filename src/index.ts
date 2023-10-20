import {
	ContractService as JuroContractService,
	HealthService as JuroHealthService,
	OpenAPI as JuroOpenApi,
	SigningService as JuroSigningService,
	TemplateService as JuroTemplateService,
} from './generated/juro';

export {
	JuroContractService,
	JuroHealthService,
	JuroOpenApi,
	JuroSigningService,
	JuroTemplateService,
}

export type {
	Answer as JuroAnswer,
	Contract as JuroContract,
	DraftLink as JuroDraftLink,
	FieldRequest as JuroFieldRequest,
	FieldResponse as JuroFieldResponse,
	Question as JuroQuestion,
	Signature as JuroSignature,
	SigningSideRequest as JuroSigningSideRequest,
	SigningSideResponse as JuroSigningSideResponse,
	Table as JuroTable,
	Template as JuroTemplate,
	TemplateMinimized as JuroTemplateMinimized,
	WebhookEvent as JuroWebhookEvent,
	WebhookResponse as JuroWebhookResponse,
} from './generated/juro';

export {
	ApiError as JuroApiError,
} from './generated/juro'

export { extractLinks, extractSignatures } from './utils/helpers';
export { isJuroApiError } from './utils/types';

const JuroService = {
	health: JuroHealthService,
	templates: JuroTemplateService,
	contracts: JuroContractService,
	signing: JuroSigningService,
}

export const Juro = (apiKey: string) => {
    JuroOpenApi.HEADERS = {
        'x-api-key': apiKey,
    }

    return JuroService
}

export default Juro;
