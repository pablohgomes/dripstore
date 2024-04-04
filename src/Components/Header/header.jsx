import "./Header.css"
import logo from "./assets/logo.png"
import carrim from "./assets/carrim.png"


function Header() {
  

    return (
      <>
      <div className="pai">
        <div className="cebacalho">
           <img src={logo} alt=""/>
           <input type="text" />
           <a href="">Cadastre-se</a>
           <button>Entrar</button>
           <img src={carrim} alt="" />
        </div>

        <div className="menu">
           <a href="#">Home</a>
           <a href="#">Produtos</a> 
           <a href="#">Categorias</a> 
           <a href="#">Meus Pedidos</a>

        </div>
        <div></div>
     


      </div>
      </>
    )
  }
  
  export default Header