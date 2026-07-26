import { UI } from "@/components/ui";

export type ContactInfo = {
  label: string;
  data: string;
  href: string;
  enableCopy?: boolean
}

const ContactLine = ({ contact }: { contact: ContactInfo }) => {

  const { label, data, href, enableCopy } = contact;

  return (

    <div className="flex justify-between items-center">
      <div className="bg-accent text-accent-content px-2.5 py-1">
        {label}
      </div>
      <div className="flex gap-2 items-center">
        <UI.Link href={href}>
          <h2 className="text-base-content text-lg font-medium">{data}</h2>
        </UI.Link>
        {enableCopy && <UI.Copy dataToCopy={data} />}
      </div>
    </div>
  )
}

export default ContactLine
