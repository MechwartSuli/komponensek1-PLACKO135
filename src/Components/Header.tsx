
type Title ={
    title:string
}


const Header = (props :Title) => {
  return (
    <title>{props.title}</title>
  )
}

export default Header