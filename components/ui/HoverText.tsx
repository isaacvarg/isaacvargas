
type Props = {
  children: React.ReactNode;
  content: string
}
const HoverText = ({ children, content }: Props) => {

  const baseClasses = "tooltip tooltip-info inline-block text-info hover:cursor-pointer hover:text-accent underline underline-offset-2 decoration-dashed  inline-block hover:scale-105 transition-transform duration-300 cursor-pointer"

  return (
    <span
      className={baseClasses}
      data-tip={content}
    >
      {children}
    </span>)
}

export default HoverText
