import Header from "./Header.jsx"
import NoteSpace from "./NoteSpace.jsx"
import Footer from "./Footer.jsx"

export default function App(){
  return(
    <div className="app">
      <Header />
      <NoteSpace />
      <Footer footerText={"Copyright © "+new Date().getFullYear()} />
    </div>
  )
}
