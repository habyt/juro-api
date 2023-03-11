import {
	ContractService,
	HealthService,
	OpenAPI as JuroOpenApi,
	SigningService,
	TemplateService,
} from './generated/juro';

export type {
	Answer as JuroAnswer,
	ApiError as JuroApiError,
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

export { extractLinks, extractSignatures } from './utils/helpers';
export { isJuroApiError } from './utils/types';

const JuroService = {
	health: HealthService,
	templates: TemplateService,
	contracts: ContractService,
	signing: SigningService,
}

export const Juro = (apiKey: string) => {
    JuroOpenApi.HEADERS = {
        'x-api-key': apiKey,
    }

    return JuroService
}

export default Juro;
