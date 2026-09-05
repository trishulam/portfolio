import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (p) => <h1 className="display mt-2 mb-6 text-4xl sm:text-5xl" {...p} />,
    h2: (p) => <h2 className="font-serif mt-12 mb-4 text-3xl" {...p} />,
    h3: (p) => <h3 className="font-serif mt-8 mb-3 text-2xl" {...p} />,
    p: (p) => <p className="my-5 text-[1.08rem] leading-relaxed text-ink" {...p} />,
    a: (p) => <a className="prose-link" {...p} />,
    ul: (p) => <ul className="my-5 list-disc space-y-2 pl-6 text-[1.05rem] leading-relaxed" {...p} />,
    ol: (p) => <ol className="my-5 list-decimal space-y-2 pl-6 text-[1.05rem] leading-relaxed" {...p} />,
    blockquote: (p) => <blockquote className="my-6 border-l border-rule pl-5 font-serif text-xl italic text-ink-2" {...p} />,
    code: (p) => <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono text-[0.85em]" {...p} />,
    pre: (p) => <pre className="my-6 overflow-x-auto rounded border border-rule bg-paper-2 p-4 font-mono text-sm leading-relaxed" {...p} />,
    hr: () => <hr className="my-10 border-rule" />,
    ...components,
  };
}
