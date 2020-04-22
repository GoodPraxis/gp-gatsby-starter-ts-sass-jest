module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
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
        "jest"
    ],
    "rules": {
        "import/extensions": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": ['.jsx', '.tsx'],
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
