import { LuDownload, LuGithub, LuLinkedin } from "react-icons/lu";
import SocialButton, { Social } from "./SocialButton";

const socials: Social[] = [
  {
    label: "GitHub",
    tooltip: "GitHub",
    icon: <LuGithub />,
    href: "https://github.com/isaacvarg"
  },
  {
    label: "LinkedIn",
    tooltip: "LinkedIn",
    icon: <LuLinkedin />,
    href: "https://linkedin.com/in/isaacvarg"
  },
  {
    label: "Resume",
    tooltip: "Download my resume",
    icon: <LuDownload />,
    href: "/isaac-vargas-resume.pdf"
  },

]

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
      {socials.map((s, i) => {
        const isLast = i === socials.length - 1

        return (
          <div key={s.href}>
            <SocialButton label={s.label} icon={s.icon} tooltip={s.tooltip} href={s.href} />
            {!isLast && <span className="hidden sm:inline">|</span>}
          </div>
        )
      })}
    </div>
  )
}

export default Socials
