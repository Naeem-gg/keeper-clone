import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { StrictMode } from "react";
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
const App = ()=>{
  return(
    <StrictMode>

    <Header/>
    <Note/>
    <Footer/>
    </StrictMode>
      );
}

export default App;