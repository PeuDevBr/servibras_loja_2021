import { Container } from "./styles";
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi'


export function HeaderGrid({ handleSubmit, setSearch, handleOpenCartModal, cart }) {
  const cartSize = cart.length;

  function resetSearch() {
    setSearch("");
    scrollToTop();
  }

  return (
    <Container>      
      <div className="container">

        <div className="logo">
          <span>Servibras</span>
        </div>

        <div className="search" >
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              placeholder=" Pesquise por nome, marca, produto..."
              name="search"
            />
            <button type="submit">
              <BiSearchAlt2 size={30}/>
            </button>
          </form>
        </div>

        <div className="cart">  
          <button onClick={handleOpenCartModal}>   
            <div>
              {cartSize >= 1 
                ? <>
                    <FaShoppingCart className="icon" size={40}/> 
                    {
                      cartSize <= 9 
                      ? <span className="amount">0{cartSize}</span> 
                      : <span className="amount">{cartSize}</span>
                    }
                  </>
                : <>
                    <FaShoppingCart className="icon" size={40}/>
                    <span className="amount" id="null">0{cartSize}</span>
                  </>
              }
            </div>  
          </button> 
        </div>
        

      </div>
    </Container>
  )
}