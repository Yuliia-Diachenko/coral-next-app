interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (  
      <div className={className}>
        <div >
          <svg width="52" height="62" className="fill-blue-500">
            <use href="/images/icons.svg#icon-Logo" />
          </svg>
            </div>
            <div >
          <svg width="260" height="45" className="fill-blue-500">
            <use href="/images/icons.svg#icon-Header_Logo_Text" />
          </svg>
      </div>    
      </div>
    )
}
export default Logo;