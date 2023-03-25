import "./index.css"
import Logo from "../../assets/logoSm.png"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

function Menu(){

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        border: '1px solid black',
        width:'30%',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          
        },
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '150%',
          [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
              width: '20ch',
            },
          },
          
        },
      }));

    return(
        <div className="menu">
            <img src={Logo} alt="logo Site" className="imgLogo"></img>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Busque seu produto"
                    inputProps={{ 'aria-label': 'Busque seu produto' }}
                />
            </Search>
            <div className="user">
                <AccountCircleIcon/>
                <div>
                    <a href="/">Minha Conta <br/> Entre ou Cadastre-se</a>
                </div>
                <ShoppingCartIcon/>
            </div>
        </div>
    )
}

export default Menu