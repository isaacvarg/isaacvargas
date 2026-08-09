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

    <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1">
      <div className="bg-accent text-accent-content px-2.5 py-1">
        {label}
      </div>
      <div className="flex gap-2 items-center min-w-0">
        <UI.Link href={href}>
          <h2 className="text-base-content text-base sm:text-lg font-medium break-all">{data}</h2>
        </UI.Link>
        {enableCopy && <UI.Copy dataToCopy={data} />}
      </div>
    </div>
  )
}

export default ContactLine
