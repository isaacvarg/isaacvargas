import MapEmbed from "./_components/MapEmbed";



const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold">
        Let&apos;s get in touch
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="h-60 w-full rounded-xl overflow-hidden mb-4 relative z-0 border border-black/20">
          <MapEmbed />
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Contact 
