import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold text-accent">{children}</h1>
  ),
  h2: ({ children }) => (
    <h1 className="text-xl font-semibold text-accent">{children}</h1>
  ),
} satisfies MDXComponents;


export function useMDXComponents(): MDXComponents {
  return components
}
