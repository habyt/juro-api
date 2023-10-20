import { JuroContract, JuroSignature } from "../../src";

export const mockSignature = (obj?: Partial<JuroSignature>): JuroSignature => ({
    uid: 'signature-uid',
    email: 'signature-email',
    name: 'signature-name',
    signingUrl: 'signature-signingUrl',
    username: 'signature-username',
    ...obj,
});

export const mockJuroContract = (obj?: Partial<JuroContract>): JuroContract => ({
    id: 'contract-uid',
    name: 'contract-name',
    internalUrl: 'contract-internalUrl',
    createdDate: '2022-01-01T00:00:00.000Z',
    updatedDate: '2022-01-01T00:00:00.000Z',
    draftLink: {
        url: 'contract-draftLink-url',
        isEnabled: true,
        enabledUntilDate: '2022-01-01T00:00:00.000Z',
    },
    fields: [],
    questions: [],
    status: 'draft',
    state: {},
    sharingUrl: 'contract-sharingUrl',
    signingSides: [
        {
            uid: 'signingSide-uid',
            name: 'signingSide-name',
            signatures: [mockSignature()],
        },
    ],
    ...obj,
});