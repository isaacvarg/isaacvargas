import { Children, isValidElement, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { UI } from "@/components/ui";

const toText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return Children.toArray(node.props.children).map(toText).join("");
  }
  return "";
};

const CodeBlock = ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
  const language = props["data-language" as keyof typeof props] as string | undefined;

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-base-300">
      <div className="flex items-center justify-between gap-2 bg-base-200 py-1 pl-4 pr-1">
        <span className="text-xs text-base-content/50">{language ?? "text"}</span>
        <UI.Copy dataToCopy={toText(children).replace(/[ \t]+$/gm, "")} />
      </div>
      <pre
        {...props}
        data-theme={undefined}
        className="overflow-x-auto px-4 py-3 text-sm leading-relaxed"
      >
        {children}
      </pre>
    </div>
  );
};

export default CodeBlock;
