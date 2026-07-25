type Props = {
  elements: string[]
}

const TagList = ({ elements }: Props) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {elements.map((element, i) => (
        <li
          key={i}
          className="flex items-center justify-center px-2.5 py-1 rounded text-sm bg-base-300 text-base-content/90 whitespace-nowrap"
        >
          {element}
        </li>
      ))}
    </ul>
  )
}

export default TagList 
