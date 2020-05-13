module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true,
        "cypress/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest",
        "cypress"
    ],
    "rules": {
        "import/extensions": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".jsx", ".tsx"],
            }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": ["**/__tests__/**", "cypress/**"]
            }
        ],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": ['.js', '.jsx', '.ts', '.tsx'],
            }
        }
    }
};
