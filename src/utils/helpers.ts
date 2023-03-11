import { JuroContract, JuroSignature } from "..";

export const extractSignature = (contract: JuroContract) => ({
    nameOfOtherParty,
    uid
}: {
    nameOfOtherParty?: string;
    uid?: string;
}): Array<JuroSignature> =>
	contract.signingSides
		.filter((ss) => ss.name === nameOfOtherParty || ss.uid === uid)
		.flatMap((ss) => ss.signatures);

type ExtractedLinks =  { internalUrl: string; otherPartySigningUrls: Array<string> };

export const extractLinksFromContract = (contract: JuroContract) => (nameOfOtherParty: string): ExtractedLinks => {
	const otherPartySigningUrls = 
        extractSignature(contract)({nameOfOtherParty})
        .map((s) => s.signingUrl)
        .filter((s): s is string => s !== undefined);
	const internalUrl = contract.internalUrl;

	return { internalUrl: internalUrl, otherPartySigningUrls };
};
