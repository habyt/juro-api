module.exports = {
	clearMocks: true,
    preset: 'ts-jest',
    testRegex: '/__tests__/.*\\.test\\.(ts|tsx)$',
    transform: {
        '\\.(ts|tsx)$': 'ts-jest',
    },
}
