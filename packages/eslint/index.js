import antfu from "@antfu/eslint-config";

/** @type {import('@voendev/eslint').Eslint} */
export const eslint = async (
  {
    jsxA11y = false,
    next = false,
    test = false,
    stylistic = false,
    noBarrelFiles = false,
    ...options
  },
  ...configs
) => {
  if (next) {
    const pluginNext = (await import("@next/eslint-plugin-next")).default;
    configs.unshift({
      name: "itmo/next",
      plugins: {
        "itmo-next": pluginNext
      },
      rules: {
        ...Object.entries({ ...pluginNext.configs.recommended.rules }).reduce(
          (acc, [key, value]) => {
            acc[key.replace("@next/next", "itmo-next")] = value;
            return acc;
          },
          {}
        )
      }
    });
  }

  if (jsxA11y) {
    const pluginJsxA11y = (await import("eslint-plugin-jsx-a11y")).default;
    configs.unshift({
      name: "itmo/jsx-a11y",
      plugins: {
        "itmo-jsx-a11y": pluginJsxA11y
      },
      rules: {
        ...Object.entries(pluginJsxA11y.flatConfigs.recommended.rules).reduce(
          (acc, [key, value]) => {
            acc[key.replace("jsx-a11y", "itmo-jsx-a11y")] = value;
            return acc;
          },
          {}
        )
      }
    });
  }

  if (options.react) {
    const pluginReact = (await import("eslint-plugin-react")).default;
    configs.unshift({
      name: "itmo/react",
      plugins: {
        "itmo-react": pluginReact
      },
      rules: {
        ...Object.entries(pluginReact.configs.recommended.rules).reduce((acc, [key, value]) => {
          acc[key.replace("react", "itmo-react")] = value;
          return acc;
        }, {}),
        "itmo-react/function-component-definition": [
          "error",
          {
            namedComponents: ["arrow-function"],
            unnamedComponents: "arrow-function"
          }
        ],
        "itmo-react/prop-types": "off",
        "itmo-react/react-in-jsx-scope": "off"
      },
      settings: {
        react: {
          version: "detect"
        }
      }
    });
  }

  if (noBarrelFiles) {
    const pluginNoBarrelFiles = (await import("eslint-plugin-no-barrel-files")).default;
    configs.unshift({
      name: "itmo/no-barrel-files",
      plugins: {
        "itmo-no-barrel-files": pluginNoBarrelFiles
      },
      rules: {
        ...Object.entries(pluginNoBarrelFiles.flat.rules).reduce((acc, [key, value]) => {
          acc[key.replace("no-barrel-files", "itmo-no-barrel-files")] = value;
          return acc;
        }, {})
      }
    });
  }

  if (stylistic) {
    configs.unshift({
      name: "itmo/formatter",
      rules: {
        "style/arrow-parens": ["error", "always"],
        "style/brace-style": "off",
        "style/comma-dangle": ["error", "never"],
        "style/indent": ["error", 2, { SwitchCase: 1 }],
        "style/jsx-curly-newline": "off",
        "style/jsx-one-expression-per-line": "off",
        "style/jsx-quotes": ["error", "prefer-double"],
        "style/linebreak-style": ["error", "unix"],
        "style/max-len": [
          "error",
          100,
          2,
          {
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
          }
        ],
        "style/member-delimiter-style": "off",
        "style/multiline-ternary": "off",
        "style/no-tabs": "error",
        "style/operator-linebreak": "off",
        "style/quote-props": "off",
        "style/quotes": ["error", "double", { allowTemplateLiterals: true }],
        "style/semi": ["error", "always"]
      }
    });
  }

  return antfu(
    { ...options, stylistic, test },
    {
      name: "itmo/rewrite",
      rules: {
        "antfu/curly": "off",
        "antfu/if-newline": "off",
        "antfu/top-level-function": "off",

        "no-console": "warn",

        "react/prefer-destructuring-assignment": "off",

        "react-hooks/exhaustive-deps": "off",

        "test/prefer-lowercase-title": "off",

        "ts/explicit-function-return-type": "off",
        "ts/consistent-type-definitions": "off",

        "node/prefer-global/process": ["error", "always"]
      }
    },
    {
      name: "itmo/sort",
      rules: {
        "perfectionist/sort-array-includes": [
          "error",
          {
            order: "asc",
            type: "alphabetical"
          }
        ],
        "perfectionist/sort-imports": [
          "error",
          {
            groups: [
              "type",
              ["builtin", "external"],
              "internal-type",
              ["internal"],
              ["parent-type", "sibling-type", "index-type"],
              ["parent", "sibling", "index"],
              "object",
              "style",
              "side-effect-style",
              "unknown"
            ],
            internalPattern: ["^~/.*", "^@/.*"],
            newlinesBetween: "always",
            order: "asc",
            type: "natural"
          }
        ],
        "perfectionist/sort-interfaces": [
          "error",
          {
            groups: ["unknown", "method", "multiline"],
            order: "asc",
            type: "alphabetical"
          }
        ],
        "perfectionist/sort-jsx-props": [
          "error",
          {
            customGroups: {
              callback: "on*",
              reserved: ["key", "ref"]
            },
            groups: ["shorthand", "reserved", "multiline", "unknown", "callback"],
            order: "asc",
            type: "alphabetical"
          }
        ],
        "perfectionist/sort-union-types": [
          "error",
          {
            groups: [
              "conditional",
              "function",
              "import",
              "intersection",
              "keyword",
              "literal",
              "named",
              "object",
              "operator",
              "tuple",
              "union",
              "nullish"
            ],
            order: "asc",
            specialCharacters: "keep",
            type: "alphabetical"
          }
        ]
      }
    },
    ...configs
  );
};
