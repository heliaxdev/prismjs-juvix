import Prism from 'prismjs';

export const juvix = {
	  'comment': /\{-[\s\S]*?(?:-\}|$)|--.*/,
		'string': {
			  pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
			greedy: true,
		},
		'punctuation': /[(){}⦃⦄.;@]/,
		'class-name': {
			pattern: /((?:data|record) +)\S+/,
			lookbehind: true,
		},
		'function': {
			pattern: /(^[ \t]*)[^:\r\n]+?(?=:)/m,
			lookbehind: true,
		},
		'operator': {
			pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
			lookbehind: true,
		},
		'keyword': /\b(?:let|let-type|in|type|if|then|else|cond|do|return|where|with|sig|end|[tT]rue|[fF]alse|case|of|mod|begin|open)\b/
};

Prism.languages.juvix = juvix;
