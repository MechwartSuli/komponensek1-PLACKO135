import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Content from "./Components/Content"
function App() {
  


  return (
    <>
      <Header title="Első weboldal" />
      <Content isActive={true} content="Lorem ipsum sit amen dolorem" ></Content>
      <Footer links={["Home", "About", "Contact"]} />
    </>
  )
}

export default App
