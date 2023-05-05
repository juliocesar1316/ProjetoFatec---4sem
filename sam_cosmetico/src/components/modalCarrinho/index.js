
import { useEffect, useState } from 'react';
import "./style.css"
import DeleteIcon from '@mui/icons-material/Delete';
import baseURL from '../../utils';
import Typography from '@mui/material/Typography';

function ModalCarrinho(){
    const [dadosModal, setDadosModal] = useState([])
    const [foto, setFoto] = useState([])
    const [carrinho, setCarrinho] = useState([])

    async function dadosCarrinho() {
        try {
            const response = await fetch(
                `${baseURL}/venda/lista_venda`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosModal(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    async function dadosFoto() {
        try {
            const response = await fetch(
                `${baseURL}/upload/fotos`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setFoto(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function juntaDados(){
        const juncao = dadosModal.map((car)=>({
            ...foto.find((fot)=> fot.id === (car.codigoProduto)),
            ...car
        }))
        return setCarrinho(juncao)
    }

    useEffect(()=>{
        dadosCarrinho()
        dadosFoto()
    },[])

    useEffect(()=>{
        juntaDados()
    }, [dadosModal,foto])

    return(
        <div className="containerModal">
            <div>
                <div className="headerModal">
                    <h1>Meu Carrinho</h1>
                    
                </div>
            </div>

            <div className="produtoModal">
                <h2>Meus produtos</h2>
                
                {carrinho.map((x)=>(
                    <div>
                        <div className='vertical'></div>
                            <div className='info'>
                                <img src={x.file} alt='' key= {x.id} width="100" height="100"/>
                                <div className='infoTitulo'>
                                    <Typography variant="body2" color="text.primary">
                                        {x.tituloProduto}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {x.marca}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {`R$ ${(x.preco).toFixed(2).toString().replace(".", ",")} `}
                                    </Typography>
                                </div> 
                                <DeleteIcon className='btn_delete'/>
                            </div>
                        
                    </div>
                ))}
                
                
            </div>

            <div >
                <div className="valores">
                    <div className='vertical'></div>
                    <div className='valor'>
                        <Typography variant="h5" color="text.primary">
                            Valor da compra
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                        {`R$ ${(carrinho.reduce((soma, x) => {return soma + x.preco },0)).toFixed(2).toString().replace(".", ",")}`}
                        </Typography>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModalCarrinho