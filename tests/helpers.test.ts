import { extractSignatures } from "../src";
import { mockJuroContract, mockSignature } from "./mocks";

describe('extractSignature', () => {
    it('returns a signature that matches the name', () => {
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
        const signatures = extractSignatures(contract)({ name: 'expected-signingSide-name' });
        expect(signatures).toEqual([signature]);
    });

    it('returns a signature that matches the uid', () => {
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
        const signatures = extractSignatures(contract)({ uid: 'expected-signingSide-uid' });
        expect(signatures).toEqual([signature]);
    });

    it('returns a multiple signatures that matches the name', () => {
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
    