

const Footer = ({links}:{links:string[]}) => {
  return (
    <div>{links.map((item)=>{
        return <a href="{item}">{item}</a>
    })}</div>
  )
}

export default Footer
