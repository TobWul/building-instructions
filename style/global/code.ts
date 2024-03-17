import { ExtendableGlobalStyleObject } from "../generated-styles/types";

export const codeStyles: ExtendableGlobalStyleObject = {
  "code:not(pre>code)": {
    backgroundColor: "component.code.background",
    paddingY: "2",
    paddingX: "4",
    borderRadius: "sm",
  },

  ".hljs-built_in, .hljs-selector-tag, .hljs-section, .hljs-link": {
    color: "component.code.builtin",
  },

  ".hljs-keyword": {
    color: "component.code.keyword",
  },

  ".hljs, .hljs-subst": {
    color: "component.code.default",
  },

  ".hljs-title, .hljs-attr, .hljs-meta-keyword": {
    // font-style: italic,
    color: "component.code.keyword",
  },

  ".hljs-string, .hljs-meta, .hljs-name, .hljs-type, .hljs-symbol, .hljs-bullet, .hljs-addition, .hljs-variable, .hljs-template-tag, .hljs-template-variable":
    {
      color: "component.code.string",
    },

  ".hljs-comment, .hljs-quote, .hljs-deletion": {
    color: "component.code.comment",
  },

  ".hljs-keyword, .hljs-selector-tag, .hljs-literal, .hljs-title, .hljs-section, .hljs-doctag, .hljs-type, .hljs-name, .hljs-strong":
    {
      fontWeight: "bold",
    },

  ".hljs-literal, .hljs-number": {
    color: "component.code.number",
  },

  ".hljs-emphasis": {
    fontStyle: "italic",
  },
};
