
type Props = {
  label: string;
  data: string;
  href: string;
}

const ContactLine = ({ label, data, href }: Props) => {


  return (
    <div className="flex justify-between items-center">
      <div className="bg-accent text-accent-content px-2.5 py-1">
        {label}
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="text-base-content text-lg font-medium">{data}</h2>

      </div>
    </div>
  )
}

export default ContactLine
