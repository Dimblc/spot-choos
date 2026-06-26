declare module "gsap/SplitText" {
  interface SplitTextVars {
    type?: string;
    smartWrap?: boolean;
    autoSplit?: boolean;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    reduceWhiteSpace?: boolean;
    onSplit?: (self: SplitText) => void;
    [key: string]: unknown;
  }

  export class SplitText {
    constructor(target: string | Element | Element[], vars?: SplitTextVars);
    revert(): void;
    chars: Element[];
    words: Element[];
    lines: Element[];
  }
}
