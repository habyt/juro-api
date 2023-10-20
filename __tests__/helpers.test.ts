import { extractLinks, extractSignatures } from "../src/utils/helpers";
import { mockJuroContract, mockSignature } from "./utils/mocks";

describe('extractSignature', () => {
    it('returns a signature that matches the name or uid', () => {
        const signature = mockSignature();
        const contract = mockJuroContract({
            signingSides: [
                {
                    uid: 'expected-signingSide-uid',
                    name: 'expected-signingSide-name',
                    signatures: [signature],
                },
                {
                    uid: 'another-signingSide-uid',
                    name: 'another-signingSide-name',
                    signatures: [mockSignature({
                        uid: 'signature-uid-2',
                    })],
                }
            ]
        });
        const signaturesByName = extractSignatures(contract)({ name: 'expected-signingSide-name' });
        expect(signaturesByName).toEqual([signature]);
        const signaturesByUid = extractSignatures(contract)({ uid: 'expected-signingSide-uid' });
        expect(signaturesByUid).toEqual([signature]);
    });

    it('returns multiple signatures that matches the name', () => {
        const signature1 = mockSignature({
            uid: 'signature-uid-1',
        });
        const signature2 = mockSignature({
            uid: 'signature-uid-2',
        });
        const contract = mockJuroContract({
            signingSides: [
                {
                    uid: 'expected-signingSide-uid',
                    name: 'expected-signingSide-name',
                    signatures: [signature1, signature2],
                },
                {
                    uid: 'another-signingSide-uid',
                    name: 'another-signingSide-name',
                    signatures: [mockSignature({
                        uid: 'signature-uid-2',
                    })],
                }
            ]
        });
        const signatures = extractSignatures(contract)({ name: 'expected-signingSide-name' });
        expect(signatures).toEqual([signature1, signature2]);
    });

    it('returns an empty array if not matching', () => {
        const signature = mockSignature({
            uid: 'signature-uid-1',
        });
        const contract = mockJuroContract({
            signingSides: [
                {
                    uid: 'expected-signingSide-uid',
                    name: 'expected-signingSide-name',
                    signatures: [signature],
                },
                {
                    uid: 'another-signingSide-uid',
                    name: 'another-signingSide-name',
                    signatures: [mockSignature({
                        uid: 'signature-uid-2',
                    })],
                }
            ]
        });
        const signatures = extractSignatures(contract)({ name: 'not-mathchin-name' });
        expect(signatures).toEqual([]);
    });
});

describe('extractLinks', () => {
    it('returns the internalUrl and otherPartySigningUrls', () => {
        const contract = mockJuroContract({
            internalUrl: 'expected-internalUrl',
            signingSides: [
                {
                    uid: 'expected-signingSide-uid',
                    name: 'expected-signingSide-name',
                    signatures: [
                        mockSignature({
                            signingUrl: 'expected-signingUrl-1',
                        }),
                        mockSignature({
                            signingUrl: 'expected-signingUrl-2',
                        }),
                    ],
                },
                {
                    uid: 'another-signingSide-uid',
                    name: 'another-signingSide-name',
                    signatures: [
                        mockSignature({
                            signingUrl: 'another-signingUrl-1',
                        }),
                    ],
                }
            ]
        });
        const linksByName = extractLinks(contract)({
            name: 'expected-signingSide-name',
        });
        expect(linksByName.internalUrl).toEqual('expected-internalUrl');
        expect(linksByName.signingUrls).toEqual(['expected-signingUrl-1', 'expected-signingUrl-2']);
        const linksByUid = extractLinks(contract)({
            uid: 'expected-signingSide-uid',
        });
        expect(linksByUid.internalUrl).toEqual('expected-internalUrl');
        expect(linksByUid.signingUrls).toEqual(['expected-signingUrl-1', 'expected-signingUrl-2']);
    });

    it('returns an empty array if not matching', () => {
        const contract = mockJuroContract({
            internalUrl: 'expected-internalUrl',
            signingSides: [
                {
                    uid: 'expected-signingSide-uid',
                    name: 'expected-signingSide-name',
                    signatures: [
                        mockSignature({
                            signingUrl: 'expected-signingUrl-1',
                        }),
                    ],
                },
            ]
        });
        const linksByName = extractLinks(contract)({
            name: 'not-matching-name',
        });
        expect(linksByName.internalUrl).toEqual('expected-internalUrl');
        expect(linksByName.signingUrls).toEqual([]);
        const linksByUid = extractLinks(contract)({
            uid: 'not-matching-uid',
        });
        expect(linksByUid.internalUrl).toEqual('expected-internalUrl');
        expect(linksByUid.signingUrls).toEqual([]);
    });
});
    