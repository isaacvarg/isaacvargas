export type Social = {
  icon: React.ReactNode;
  label: string;
  href: string;
  tooltip: string;
}

const SocialButton = ({ icon, label, href, tooltip }: Social) => {
  return (
    <div className="tooltip" data-tip={tooltip}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-ghost btn-accent ">
          {icon}
          {label}
        </button>
      </a>
    </div>
  )
}

export default SocialButton
