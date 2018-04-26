module.exports = {
    'globals': {
        'Promise': true
    },
    'env': {
        'mocha': true,
        'browser': true,
        'node': true,
        'jquery': true
    },
    'parser': 'babel-eslint',
    'plugins': [
        'babel'
    ],
    'rules': {
        // 0 = off, 1 = warn, 2 = error

        // Possible Errors
        'for-direction': 'off',
        'getter-return': 'off',
        'no-await-in-loop': 'off',
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': ['error', 'except-parens'],
        'no-console': 'off',
        'no-constant-condition': 'warn',
        'no-control-regex': 'warn',
        'no-debugger': 'off',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'warn',
        'no-extra-parens': 'off',
        'no-extra-semi': 'warn',
        'no-func-assign': 'error',
        'no-inner-declarations': ['warn', 'functions'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'off',
        'no-obj-calls': 'warn',
        'no-prototype-builtins': 'warn',
        'no-regex-spaces': 'warn',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'warn',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        // Best Practices
        'accessor-pairs': 'warn',
        'array-callback-return': 'warn',
        'block-scoped-var': 'off', // see Babel section
        'class-methods-use-this': 'warn',
        'complexity': ['warn', 14],
        'consistent-return': 'warn',
        'curly': ['error', 'all'],
        'default-case': 'warn',
        'dot-location': ['warn', 'property'],
        'dot-notation': ['warn', {
            allowKeywords: true
        }], // allowPattern: regex
        'eqeqeq': 'error',
        'guard-for-in': 'warn',
        'no-alert': 'error',
        'no-caller': 'off',
        'no-case-declarations': 'warn',
        'no-div-regex': 'warn',
        'no-else-return': 'warn',
        'no-empty-function': 'warn',
        'no-empty-pattern': 'warn',
        'no-eq-null': 'off',
        'no-eval': 'warn',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-extra-label': 'error',
        'no-fallthrough': 'off',
        'no-floating-decimal': 'off',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'warn',
        'no-implicit-globals': 'warn',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'warn',
        'no-multi-str': 'warn',
        'no-new': 'off',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-param-reassign': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'off',
        'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'warn',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'error',
        'no-useless-call': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-void': 'warn',
        'no-warning-comments': ['off', {
            'terms': ['todo', 'tofix'],
            'location': 'start'
        }],
        'no-with': 'off',
        'prefer-promise-reject-errors': 'warn',
        'radix': 'off',
        'require-await': 'warn',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'inside'],
        'yoda': ['warn', 'never'],

        // Strict Mode
        'strict': ['error', 'never'],

        // Variables
        'init-declarations': ['warn', 'always'],
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'warn',
        'no-restricted-globals': 'off',
        'no-shadow': 'warn',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'warn',
        'no-undef-init': 'warn',
        'no-undefined': 'warn',
        'no-unused-vars': ['warn', {
            'vars': 'local',
            'args': 'after-used'
        }],
        'no-use-before-define': 'error',

        // Node.js
        'callback-return': 'error',
        'global-require': 'warn',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'warn',
        'no-mixed-requires': ['warn', {
            allowCall: true
        }],
        'no-new-require': 'warn',
        'no-path-concat': 'warn',
        'no-process-env': 'off',
        'no-process-exit': 'error',
        'no-restricted-modules': ['off', ''], // add any unwanted Node.js core modules
        'no-sync': 'error',

        // Stylistic Issues
        'array-bracket-newline': ['off', 'never'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['off', 'never'],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', {
            allowSingleLine: true
        }],
        'camelcase': ['warn', {
            properties: 'always'
        }],
        'capitalized-comments': 'off',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': ['warn', {
            before: false,
            after: true
        }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'consistent-this': 'off',
        'eol-last': 'warn',
        'func-call-spacing': ['warn', 'never'],
        'func-name-matching': 'off',
        'func-names': ['warn', 'always'],
        'func-style': 'off',
        'function-paren-newline': 'off',
        'id-blacklist': 'off', // [.., ..]
        'id-length': 'off',
        'id-match': 'off',
        'indent': ['warn', 2],
        'jsx-quotes': 'off',
        'key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': ['warn', {
            before: true,
            after: true
        }],
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'max-depth': ['warn', {
            max: 6
        }],
        'max-len': ['warn', {
            code: 120
        }],
        'max-lines': 'off',
        'max-nested-callbacks': ['warn', {
            max: 6
        }],
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-ternary': 'off',
        'new-cap': 'off', // see Babel section
        'new-parens': 'error',
        'newline-per-chained-call': ['warn', {
            ignoreChainWithDepth: 2
        }],
        'no-array-constructor': 'warn',
        'no-bitwise': 'warn',
        'no-continue': 'warn',
        'no-inline-comments': 'off',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['warn', {
            'max': 1
        }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'warn',
        'no-plusplus': ['warn', {
            allowForLoopAfterthoughts: true
        }],
        'no-restricted-syntax': 'off',
        'no-tabs': 'warn',
        'no-ternary': 'off',
        'no-trailing-spaces': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off', // see Babel section
        'object-property-newline': 'off',
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': 'off',
        'operator-assignment': ['warn', 'never'],
        'operator-linebreak': 'off',
        'padded-blocks': ['off', 'never'],
        'padding-line-between-statements': 'off',
        'quote-props': ['warn', 'consistent-as-needed'],
        'quotes': ['warn', 'single'],
        'require-jsdoc': 'off',
        'semi': ['error', 'always'],
        'semi-spacing': ['warn', {
            before: false,
            after: true
        }],
        'semi-style': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': 'warn',
        'space-unary-ops': 'off',
        'spaced-comment': ['warn', 'always'],
        'switch-colon-spacing': ['warn', {
            after: true,
            before: false
        }],
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'wrap-regex': 'warn',

        // ECMAScript 6
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': ['warn', {
            before: true,
            after: true
        }],
        'constructor-super': 'warn',
        'generator-star-spacing': 'off',
        'no-class-assign': 'error',
        'no-confusing-arrow': 'warn',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'warn',
        'no-new-symbol': 'warn',
        'no-restricted-imports': 'off', // [.., ..]
        'no-this-before-super': 'warn',
        'no-useless-computed-key': 'off',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-var': 'error',
        'object-shorthand': ['warn', 'properties'],
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'off',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'require-yield': 'off',
        'rest-spread-spacing': ['warn', 'never'],
        'sort-imports': 'off',
        'symbol-description': 'warn',
        'template-curly-spacing': ['warn', 'never'],
        'yield-star-spacing': 'off',

        // Babel
        'babel/new-cap': 1,
        'babel/object-curly-spacing': [1, 'always']
    }
};
