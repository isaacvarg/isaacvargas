import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Socials from "./Socials";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-stretch md:justify-between md:gap-12 lg:gap-20">
      <div className="flex items-start flex-col gap-4 min-w-0">
        <div className="text-2xl sm:text-3xl font-semibold">
          Hello!
          I&apos;m
          <span className="text-accent/80"> Isaac Vargas</span>
        </div>

        <div className="text-base sm:text-lg lg:text-xl">
          I am a chemist turned software engineer. Currently, I&apos;m a SWE at <span className="hover:cursor-pointer hover:text-primary underline decoration-dashed text-primary/90">Essentials by Catalina, Inc</span>. I&apos;ve written software that keeps scientific, manufacturing, and operations workflows moving smoothly. Seeing how code can solve very specific puzzles is what keeps me motivated to build; There are always new challenges and opportunities to learn and apply that knowledge.
        </div>

        <div className="text-base sm:text-lg lg:text-xl hover:underline decoration-dashed hover:text-accent">
          <Link href="/about">Learn more about me...</Link>
        </div>

        <Socials />

      </div>


      <div className="flex items-center justify-center flex-col gap-2 w-full md:w-auto md:shrink-0">
        <div className="avatar">
          <div className="w-32 sm:w-40 md:w-48 rounded-full overflow-hidden">
            <Image
              height={460}
              width={460}
              sizes="(max-width: 768px) 10rem, 12rem"
              src="/me.jpeg"
              alt="Picture of Isaac"
            />
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <LuMapPin className="size-6 text-primary" />
          California
        </div>
      </div>

    </div >
  )
}

export default Hero
