import Home from "./pages/home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CadastroProduto from "./pages/cadastroProduto";
import Produto from "./pages/produtos";
import ProdutoDescritivo from "./pages/produtoDescricao";

function Main() {
  return (
    <div className="Main">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro_produto" element={<CadastroProduto/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/produtoDescritivo" element={<ProdutoDescritivo/>}/>
         </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default Main;
