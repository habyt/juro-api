import { JuroContract, JuroSignature } from "..";

export const extractSignatures = (contract: JuroContract) => ({
    name,
    uid
}: {
    name?: string;
    uid?: string;
}): Array<JuroSignature> =>
	contract.signingSides
		.filter((ss) => ss.name === name || ss.uid === uid)
		.flatMap((ss) => ss.signatures);

type ExtractedLinks =  { internalUrl: string; otherPartySigningUrls: Array<string> };

export const extractLinks = (contract: JuroContract) => (name: string): ExtractedLinks => {
	const otherPartySigningUrls = 
        extractSignatures(contract)({name})
        .map((s) => s.signingUrl)
        .filter((s): s is string => s !== undefined);
	const internalUrl = contract.internalUrl;

	return { internalUrl: internalUrl, otherPartySigningUrls };
};
