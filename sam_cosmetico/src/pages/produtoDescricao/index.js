import { useLocation, useParams } from 'react-router-dom';

function ProdutoDescritivo(){
    const location = useLocation();
    const dados = location.state.e;

    return(
        <div className="containerDescricao">
            <div>
                <div className="fotoDescritivo">
                    <img></img>
                </div>
                <div className="dadosDescritivo">
                    {console.log(dados)}
                    <h2>{dados.tituloProduto}</h2>
                    <p>Ilía</p>
                    <p>Cod. 126171 - Presente Natura Ilía</p>
                    <p>R$ 164,90</p>
                    <p>À vista ou em até 5x de R$ 32,98 sem juros</p>


                </div>
            </div>
        </div>
    )
}

export default ProdutoDescritivo