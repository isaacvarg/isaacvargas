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
    href: "https://boardgamegeek.com"
  },
  {
    label: "Resume",
    tooltip: "Download my resume",
    icon: <LuDownload />,
    href: "/"
  },

]

const Socials = () => {
  return (
    <div className="flex gap-2 items-center">
      {socials.map((s, i) => {
        const isLast = i === socials.length - 1

        return (
          <div key={s.href}>
            <SocialButton label={s.label} icon={s.icon} tooltip={s.tooltip} href={s.href} />
            {!isLast && <span>|</span>}
          </div>
        )
      })}
    </div>
  )
}

export default Socials
