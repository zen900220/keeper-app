export default function Footer(props){
  return(
    <div className="footer">
      <div className="wrapper">
        <small>{props.footerText}</small>
      </div>
    </div>
  )
}
