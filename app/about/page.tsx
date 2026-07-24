import Skills from "@/components/Skills";
import { UI } from "@/components/ui";
import { projects } from "@/lib/content/projects";
import Image from "next/image";

const projectCount = projects.slugs.length

const About = () => {
  return (
    <div className="flex flex-col gap-4">
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

      <Skills />


      <div>
        work
      </div>

      <div>

        <p>
          Outside of software I love rock climbing and pickleball. I also enjoy playing tabletop rpgs and boardgames, reading scifi and fantasy, tinkering with electronics and 3d printing, and learning new skills. I am <UI.Hover content="currently I daily drive the Corne, a 40% 3x6 column staggered keyboard">custom split keyboard</UI.Hover> and linux enthusiast.
        </p>

      </div>


    </div>
  )
}

export default About 
