import { LuDot } from "react-icons/lu";

type Props = {
  elements: string[]
}
const HorizontalList = ({ elements }: Props) => {
  return (
    <ul className="flex gap-4">
      {elements.map((element, i) => {

        const isLast = elements.length - 1 === i

        return (

          <li key={i} className="flex items-center">
            {element}
            {!isLast && <span className="pl-2"><LuDot /></span>}
          </li>

        )
      })}
    </ul>

  )
}

export default HorizontalList
