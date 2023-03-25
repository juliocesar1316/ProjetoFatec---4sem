import Home from "./pages/home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CadastroProduto from "./pages/cadastroProduto";

function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={''} >
               <Route path="/home" element={<Home/>}/>
               <Route path="/cadastro_produto" element={<CadastroProduto/>}/>

            </Route>
         </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default Main;
