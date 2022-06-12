/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended"
    ],
    "env": {
        "vue/setup-compiler-macros": true
    },
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "vue/html-indent": ["error", 4],
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "off",
    }
};