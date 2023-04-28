import Home from "./pages/home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CadastroProduto from "./pages/cadastroProduto";
import Produto from "./pages/produtos";

function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
         <Routes>
            
               <Route path="/" element={<Home/>}/>
               <Route path="/cadastro_produto" element={<CadastroProduto/>}/>
               <Route path="/produto" element={<Produto/>}/>

            
         </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default Main;
