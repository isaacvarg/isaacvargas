import Image from "next/image";

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

        <div className="tex-base-content flex flex-col gap-2">
          <p>
            Hello! I&apos;m Isaac Vargas. I am a software engineer based in Southern California and am currently working at Essentials by Catalina, Inc. I have a Bachelor of Science, Chemistry  and previously worked as a synthetic and a formulations chemist. My switch to software engineering stemmed from trying to improve my workflow in and out of the lab by making small tools using javascript, python, bash, and latex. Once I began to see how learning new technologies and applying the knowledge to a tangible utility, I was hooked.
          </p>


        </div>

      </div>



    </div>
  )
}

export default About 
