import "./index.css"
import Header from "../../components/header";
import Menu from "../../components/menu";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';

function CadastroProduto(){
    const [categoria, setCategoria] = useState('')
    const [marca, setMarca] = useState('')

    const handleChangeCategoria = (SelectChangeEvent) => {
        setCategoria(SelectChangeEvent.target.value);
    };

    const handleChangeMarca = (SelectChangeEvent) => {
        setMarca(SelectChangeEvent.target.value);
    };

    return(
        <div className="containerCadProd">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div className="tituloPage">
                <h1>Cadastro</h1>
            </div>
            <div className="bodyCad">
                <div className="cadMarca">
                    <h2>Marca</h2>
                    <TextField
                        id="filled-search"
                        label="Nome Marca"
                        type="search"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" size="medium">
                        Enviar
                    </Button>
                </div>
                <div className="cadCategoria">
                    <h2>Categoria</h2>
                    <TextField
                        id="filled-search"
                        label="Nome Categoria"
                        type="search"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" size="medium">
                        Enviar
                    </Button>
                </div>


                <div className="cadProduto">
                    <h2>Produto</h2>
                    <div>
                        <div className="cadDados">
                            <TextField
                            id="filled-search"
                            label="Nome Produto"
                            type="search"
                            />
                            <TextField
                                id="filled-search"
                                label="SubNome Produto"
                                type="search"
                            />
                            <TextField
                                id="filled-search"
                                label="Preço Unitario"
                                type="number"
                            />
                            <InputLabel id="select-categoria">Categoria</InputLabel>
                            <Select
                                labelId="select-categoria"
                                id="select-categoria"
                                value={categoria}
                                label="Categoria"
                                onChange={handleChangeCategoria}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            
                            <InputLabel id="select-marca-label">Marca</InputLabel>
                            <Select
                                labelId="select-marca-label"
                                id="select-marca"
                                value={marca}
                                label="Marca"
                                onChange={handleChangeMarca}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <TextField
                                id="filled-search"
                                label="Nome Categoria"
                                type="search"
                            />
                            <TextField
                                id="filled-search"
                                label="Nome Categoria"
                                type="search"
                            />
                        </div>
                        <div className="cadUpload">
                            
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default CadastroProduto;