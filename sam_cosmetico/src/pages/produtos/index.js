import Header from "../../components/header";
import Menu from "../../components/menu";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import "./style.css"
import { useEffect, useState } from "react";
import baseURL from "../../utils";

function Produto(){

    const [dadosProdutos, setDadosProdutos] = useState([])
    const [dadosFotos, setDadosFotos] = useState([])
    const [dadosCategorias, setDadosCategorias] = useState([])
    const [dadosMarcas, setDadosMarcas] = useState([])
    const [dadosProdFoto, setDadosProdFoto] = useState([])
    const [filtroMarca, setFiltroMarca] = useState([])

    async function dadosProduto() {
        try {
            const response = await fetch(
                `${baseURL}/produto/lista_produto`,{
                    method: "GET",
                }
            );
            const data = await response.json();
           
            setDadosProdutos(data);
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
            setDadosFotos(data);
            
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    async function dadosCategoria() {
        try {
            const response = await fetch(
                `${baseURL}/categoria/lista_categoria`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosCategorias(data); 
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    async function dadosMarca() {
        try {
            const response = await fetch(
                `${baseURL}/marca/lista_marca`,{
                    method: "GET",
                }
            );
            const data = await response.json();
            setDadosMarcas(data);
            return;
        } catch (error) {
            return console.log(error.message); 
        }
    }

    function juntaDados(){
        const juncao = dadosProdutos.map((prod)=>({
            ...dadosFotos.find((foto)=> foto.id === (prod.id)),
            ...prod
        }))
        setDadosProdFoto(juncao)
        return;
    }

    function handleChange(event){
        console.log(event)
    }

    useEffect(() => {
        dadosProduto()
        dadosFoto()
        dadosCategoria()
        dadosMarca()
    },[]);

    useEffect(()=>{
        juntaDados()
    },[dadosProdutos, dadosFotos])
    

    return(
        <div className="containerProduto">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="bodyProduto">
                <div >   
                    <Card sx={{ width: 300 }} elevation={4} className="filtro">
                        <h3>Marcas</h3>
                        <div className="marca">
                            <FormGroup>
                                {dadosMarcas.map((x)=>{
                                    return <FormControlLabel 
                                        control={<Checkbox  
                                            name={x.nomeMarca} 
                                            onChange={(e) => handleChange(e.target.name)}
                                            />} 
                                        label={x.nomeMarca} 
                                        />
                                })}
                                {/* <button onClick={juntaDados}>teste</button> */}
                            </FormGroup>
                        </div>

                        <h3>Categorias</h3>
                        <div className="categoria">
                            <FormGroup>
                                {dadosCategorias.map((x)=>{
                                    return <FormControlLabel control={<Checkbox />} label={x.nomeCategoria} />
                                })}
                            </FormGroup>
                        </div>
                    </Card>
                </div>
                <div className="produtos">
                    <ImageList sx={{ width: 1000 }} cols={3} gap={30}>

                        {dadosProdFoto.map((x)=>{
                            return (
                                <Card sx={{ width: 300 }} elevation={4}>
                                    <CardActionArea >
                                        <CardMedia
                                            sx={{ height: 300 }}
                                            image={x.file}
                                            title={x.tituloProduto}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {x.marca}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {x.tituloProduto}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {x.preco}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            )
                        })}

                        

                        {/* <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ width: 300 }} elevation={4}>
                            <CardActionArea >
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={Produtos}
                                    title="nome produto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Marca
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Nome Produto
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Preço
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ width: 300 }} variant="outlined">Comprar</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card> */}
                    </ImageList>
                </div>
            </div>

        </div>
    )
}

export default Produto;