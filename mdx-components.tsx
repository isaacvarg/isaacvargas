import type { MDXComponents } from 'mdx/types'
import CodeBlock from '@/components/mdx/CodeBlock'
import { UI } from '@/components/ui'

const components: MDXComponents = {
  pre: (props) => <CodeBlock {...props} />,
  code: ({ children, ...props }) =>
    'data-language' in props ? (
      <code {...props} data-theme={undefined}>{children}</code>
    ) : (
      <code
        {...props}
        className="rounded bg-base-300 px-1.5 py-0.5 text-[0.9em] text-base-content"
      >
        {children}
      </code>
    ),
  a: ({ href, children, ...props }) => (
    <UI.Link href={href ?? '#'} {...props} className="inline">
      {children}
    </UI.Link>
  ),
  p: ({ children }) => (
    <p className="text-base-content text-left md:text-justify">{children}</p>
  ),
  h1: ({ children }) => (
    <h1 className="text-2xl sm:text-3xl font-semibold text-accent">{children}</h1>
  ),
  h2: ({ children }) => (
    <h1 className="text-xl font-semibold text-accent">{children}</h1>
  ),
  h3: ({ children }) => (
    <h1 className="text-lg font-semibold text-accent/75">{children}</h1>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1 text-base-content">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="pl-2">{children}</li>
  ),
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-sm text-zinc-900 dark:text-zinc-100">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-50 font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
      {children}
    </td>
  ),
} satisfies MDXComponents;


export function useMDXComponents(): MDXComponents {
  return components
}
