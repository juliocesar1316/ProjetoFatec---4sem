import "./index.css"
import Header from "../../components/header";
import Menu from "../../components/menu";
import SubMenu from "../../components/subMenu";

function Home(){

    return(
        <div className="containerHome">
            <div>
                <Header/>
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <SubMenu/>
            </div>
            

        </div>
    );
}

export default Home;