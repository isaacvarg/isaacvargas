

const classes = {
  base: "btn btn-ghost btn-accent ",
  size: {
    base: "",
    lg: "btn-lg",
  }
}

export type Social = {
  icon: React.ReactNode;
  label: string;
  href: string;
  tooltip: string;
  size?: keyof typeof classes.size;
}

const SocialButton = ({ icon, label, href, tooltip, size = 'base' }: Social) => {
  return (
    <div className="tooltip" data-tip={tooltip}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={`${classes.base} ${classes.size[size]}`}>
          {icon}
          {label}
        </button>
      </a>
    </div>
  )
}

export default SocialButton
