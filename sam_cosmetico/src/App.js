import Home from "./pages/home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CadastroProduto from "./pages/cadastroProduto";
import Produto from "./pages/produtos";
import ProdutoDescritivo from "./pages/produtoDescricao";
import Carrinho from "./pages/carrinho";
import MinhaConta from "./pages/minhaConta";

function Main() {
  return (
    <div className="Main">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro_produto" element={<CadastroProduto/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/produtoDescritivo" element={<ProdutoDescritivo/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/minha_conta" element={<MinhaConta/>}/>
                {/* <Route path="/cadastro_usuario" element={<Carrinho/>}/> */}
         </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default Main;
