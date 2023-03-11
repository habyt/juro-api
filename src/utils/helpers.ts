import { JuroContract, JuroSignature } from "..";

type SigningSideSelector = {
    name?: string;
    uid?: string;
};

export const extractSignatures = (contract: JuroContract) => ({
    name,
    uid
}: SigningSideSelector): Array<JuroSignature> =>
	contract.signingSides
		.filter((ss) => ss.name === name || ss.uid === uid)
		.flatMap((ss) => ss.signatures);

type ExtractedLinks =  { internalUrl: string; signingUrls: Array<string> };

export const extractLinks = (contract: JuroContract) => (signingSideSelector: SigningSideSelector): ExtractedLinks => {
	const signingUrls = 
        extractSignatures(contract)(signingSideSelector)
        .map((s) => s.signingUrl)
        .filter((s): s is string => s !== undefined);
	const internalUrl = contract.internalUrl;

	return { internalUrl: internalUrl, signingUrls };
};
