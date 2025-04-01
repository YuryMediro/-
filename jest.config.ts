// export default {
// 	preset: 'ts-jest',
// 	testEnvironment: 'jest-environment-jsdom',
// 	transform: {
// 		'^.+\\.tsx?$': 'ts-jest',
// 		// process `*.tsx` files with `ts-jest`
// 	},
// 	moduleNameMapper: {
// 		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
// 	},
// }
export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},

	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
	},

	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}