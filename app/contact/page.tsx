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
      <div className="text-2xl sm:text-3xl font-semibold">
        Let&apos;s get in touch
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* An explicit height is required below md: once the grid stacks there is
            no sibling to stretch against, and Map's h-full would resolve to 0. */}
        <div className="w-full h-64 sm:h-80 md:h-auto md:min-h-80 rounded-xl overflow-hidden relative z-0 border border-black/20">
          <MapEmbed />
        </div>

        <div className="flex flex-col justify-between gap-8 ">
          <div className="grid gap-6">
            {contactInfo.map(c => <ContactLine contact={c} key={c.label} />)}
          </div>

          <Socials />

        </div>
      </div>
    </div>

  )
}

export default Contact 
