module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 0,
        'no-restricted-syntax': 0,
        'react/jsx-props-no-spreading': 0,
        'import/no-named-as-default': 0,
        'linebreak-style': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'no-use-before-define': 0,
        'no-unused-vars': 0,
        'no-tabs': 0,
        'no-console': 0,
        'arrow-body-style': 0,
        'template-curly-spacing': 0,
        'no-empty': 0,
        'max-len': 0,
        'func-names': 0,
        'eol-last': 0,
        'no-nested-ternary': 0,
        'no-multi-assign': 0,
        'react/jsx-no-useless-fragment': 0,
        'no-debugger': 0,
        'arrow-parens': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-indent-props': 0,
        '@typescript-eslint/quotes': 0,
        'prefer-template': 0,
        '@typescript-eslint/indent': 0,
        'spaced-comment': 0,
        'react/no-array-index-key': 0,
        'no-promise-executor-return': 0,
        'react/button-has-type': 0,
        'react/jsx-curly-spacing': 0,
        'import/no-cycle': 0,
        'react/jsx-closing-tag-location': 0,
        'consistent-return': 0,
        'space-before-blocks': 0,
        'implicit-arrow-linebreak': 0,
        'react/jsx-wrap-multilines': 0,
        'no-param-reassign': [2, {props: false}],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 0,
        // 'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/label-has-associated-control': ['error', {
            required: {
                some: ['nesting', 'id'],
            },
        }],
        'jsx-a11y/label-has-for': ['error', {
            required: {
                some: ['nesting', 'id'],
            },
        }],
    },
};
