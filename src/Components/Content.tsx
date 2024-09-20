

type Title ={
    content:string
    isActive:boolean
}


const Content = (props :Title) => {
  if (props.isActive==true) {
      
      return (
      <title>{props.content}</title>
    )
  }
}

export default Content