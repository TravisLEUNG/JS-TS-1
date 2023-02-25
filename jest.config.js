export default {
    moduleFileExtensions: ['js', 'ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/__tests__/*.test.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
};
