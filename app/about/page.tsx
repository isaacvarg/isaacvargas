import Skills from "@/components/Skills";
import { UI } from "@/components/ui";
import { projects } from "@/lib/content/projects";
import Image from "next/image";
import { LuBookHeart, LuBriefcase } from "react-icons/lu";

const projectCount = projects.slugs.length

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold">
        About Me
      </div>
      <div className="flex flex-row gap-8 ">
        <div className="min-w-100 rounded-lg overflow-clip">
          <Image src="/ana-y-isaac-2.jpg" width={956} height={1274} alt="Me and my beautiful wife." />
        </div>

        <div className="tex-base-content text-justify flex flex-col gap-3">
          <p>
            Hello! I&apos;m Isaac Vargas, a software engineer based in Southern California.
          </p>
          <p>
            I have a Bachelor of Science, Chemistry and previously worked as a organic synthetic and a formulations chemist. My switch to software engineering stemmed from trying to improve my workflow in and out of the lab by making small tools using javascript, python, bash, and latex. Once I began to see how learning new technologies and applying the knowledge to a tangible utility, I was hooked.
          </p>
          <p>
            Some of my notable projects include: <UI.Link href="/projects/lumexia">Lumexia</UI.Link>, a <UI.Hover content="Software that integrates into daily operations that help manage the complexities of manufacturing">manufacturing ERP</UI.Hover> that helps several medium sized companies save money on production run and keep everything digital and traceable, <UI.Link href="/projects/inci-to-unii">INCI to UNII</UI.Link> helps chemist convert a cosmetic ingredient list to nomenclature accepted by the <UI.Hover content="The U.S. Food & Drug Administration which also regulates cosmetics and cosmetics classified as drugs (acne solutions, dandrif shampoo, sunscreen, etc).">FDA</UI.Hover> for <UI.Hover content="Modernization of Cosmetics Regulation Act of 2022">MoCRA</UI.Hover> compliance. <UI.Link href="/projects">Take a look all {projectCount} of my projects</UI.Link>.
          </p>

        </div>

      </div>


      <div className="flex flex-col gap-12">
        <Skills />

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <LuBriefcase className="size-8 text-accent" />
            <span className="text-base-content text-2xl font-semibold">Experience</span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_1fr] gap-x-6 gap-y-6 text-base-content">

            <div className="flex items-center">
              <div className="bg-[#f4dbd6] flex size-24 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/logos/ebc.png"
                  width={500}
                  height={500}
                  alt="Environmental Beauty Concepts logo"
                  className="size-16 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg text-base-content/80">Essentials by Catalina, Inc. (current)</h2>
              <p>Working as a software engineer, I develop internal tools that provide robust digital solutiosn to every step in the production pipeline; tools that help not only make the entire process more efficient and transparent, but have also saved thousands of dollars per batch by helping combat material availability,  pricing fluctuations, material quality issues and chemical compatability and stability.</p>
              <p>In addition to helping production process, tools I made also help chemist and regulators aggregate and prepare the data needed.</p>


            </div>

            <div className="flex items-center">
              <div className="bg-[#f4dbd6] flex size-24 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/logos/maki.png"
                  width={500}
                  height={500}
                  alt="Environmental Beauty Concepts logo"
                  className="size-16 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg text-base-content/80">Maki Creations, Inc (past)</h2>
              <p>Developed quantitative &amp; qualitative quality methods for cosmetic and toiletry products as formulations chemist. Additionally, I developed several formulations and  routinely experimented with material analogs. While here I helped bring the rigor of a medicinal chemistry lab to a product reserach &amp; development facility.</p>
              <p>I also began developing narrowly scoped utility programs that helped other chemist and I automate tedious calculations and parsing material supplier technical documentation.</p>

            </div>

            <div className="flex items-center">
              <div className="bg-[#f4dbd6] flex size-24 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/logos/csuf.png"
                  width={500}
                  height={500}
                  alt="Environmental Beauty Concepts logo"
                  className="size-16 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg text-base-content/80">CSUF Undergraduate Researcher (past)</h2>
              <p>While pursuing my BSc Chemistry, I worked as an undergrad researcher in Dr. Nicholas T. Salzameda organic synthesis laboratory. I developed and validated organometallic peptidomimetics synthetic pathways for potential remedial drugs for the Botulinum neurotoxin type A serotype light chain.</p>

              <p>Here I received a lot of experience with experimental design and validation, working with high pressure liquid chromatography, nuclear magnetic resonance imaging, and collaborating with other scientists on large projects.</p>

            </div>


          </div>


        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <LuBookHeart className="size-8 text-accent" />
            <span className="text-base-content text-2xl font-semibold">Personal</span>
          </div>
          <p>
            Outside of software I love rock climbing and pickleball. I also enjoy playing tabletop rpgs and boardgames, reading scifi and fantasy, tinkering with electronics and 3d printing, and learning new skills. I am <UI.Hover content="currently I daily drive the Corne, a 40% 3x6 column staggered keyboard">custom split keyboard</UI.Hover> and linux enthusiast.
          </p>
          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About 
