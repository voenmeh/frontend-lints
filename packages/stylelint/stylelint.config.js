/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "no-invalid-position-at-import-rule": null,
    "keyframe-declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "block-no-empty": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "scss/no-global-function-names": null,
    "media-feature-name-no-unknown": true,
    "scss/at-if-closing-brace-newline-after": null,
    "scss/at-if-closing-brace-space-after": null,
    "scss/at-else-empty-line-before": null,
    "scss/at-else-closing-brace-newline-after": null,
    "scss/at-else-closing-brace-space-after": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply", "variants", "responsive", "screen"]
      }
    ],
    "comment-no-empty": true,
    "no-descending-specificity": null,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"]
      }
    ],
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands"]
      }
    ],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"]
      }
    ],
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"]
      }
    ],
    "function-name-case": "lower",
    "length-zero-no-unit": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"]
      }
    ],
    "selector-class-pattern": "[a-z]+",
    "selector-id-pattern": "[a-z]+",
    "function-url-scheme-disallowed-list": ["ftp"],
    "order/properties-order": [
      [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "content",
        "display",
        "flex",
        "flex-direction",
        "flex-grow",
        "flex-wrap",
        "align-items",
        "align-self",
        "justify-content",
        "justify-self",
        "float",
        "min-width",
        "max-width",
        "min-height",
        "max-height",
        "width",
        "height",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "font",
        "font-style",
        "font-weight",
        "font-size",
        "line-height",
        "font-family",
        "text-align",
        "text-decoration",
        "text-transform",
        "color",
        "background",
        "background-position",
        "background-repeat",
        "background-color",
        "background-image",
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-color",
        "border-radius",
        "list-style",
        "opacity",
        "transition"
      ],
      {
        unspecified: "bottom"
      }
    ],
    "order/order": [
      "declarations",
      {
        type: "rule",
        selector: "^&: :(before|after)"
      },
      {
        type: "rule",
        selector: "^&:\\w"
      },
      "rules",
      {
        type: "at-rule",
        name: "media"
      },
      {
        type: "rule",
        selector: "^&--\\w"
      },
      {
        type: "rule",
        selector: "^&_"
      }
    ]
  },
  syntax: "scss"
};
