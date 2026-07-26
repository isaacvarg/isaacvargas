import MapEmbed from "./_components/MapEmbed";
import ContactLine, { ContactInfo } from "./_components/ContactLine"
import Socials from "@/components/Socials";

const contactInfo: ContactInfo[] = [
  { label: "Phone", data: "+1 (951) 716-2297", href: "tel: +19517162297", enableCopy: true },
  { label: "Email", data: "hello@isaacvargas.dev", href: "mailto:hello@isaacvargas.dev", enableCopy: true },
  { label: "Address", data: "Southern California, US", href: "#" },
]

const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold">
        Let&apos;s get in touch
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="w-full rounded-xl overflow-hidden relative z-0 border border-black/20">
          <MapEmbed />
        </div>

        <div className="flex flex-col justify-between gap-8 ">
          <div className="grid grid_cols-2 gap-6">
            {contactInfo.map(c => <ContactLine contact={c} key={c.label} />)}
          </div>

          <Socials />

        </div>
      </div>
    </div>

  )
}

export default Contact 
