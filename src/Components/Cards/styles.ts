import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 40px 0;
`
export const Box = styled.div`
  height: 360px; /* What??? */

  position: absolute; 
  top: 20px;
  left: 20px;
  right: 20px;
  border: 20px;
  background: linear-gradient(45deg, #ebedee, #accbee);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
`
export const H2 = styled.h2`
  position: absolute;
  top: 2px;
  right: 30px;
  font-size: 3.6rem;
  color: rgba(0, 0, 0, 0.02);
  transition: 0.7s;
  pointer-events: none;
`

export const A = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: #ebf5fc;
  margin-top: 15px;
  border-radius: 20px;
  color: #777;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.2);
  margin-bottom: 0.5rem;
`
export const H3 = styled.h3`
  font-size: 1.2em;
  color: #777;
  min-height: 3.2rem;
  z-index: 1;
  transition: 0.7s;
`

export const P = styled.p`
  font-size: 1em;
  font-weight: 300;
  color: #777;
  z-index: 1;
  transition: 0.7s;
`

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`
export const Image = styled.img`
  height: 13rem;
  width: 13rem;
  
`

export const Card = styled.div`
  position: relative;
  width: 270px;
  height: 400px;
  box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
              inset -5px -5px 5px rgba(225,225,225,0.5),
              5px 5px 5px rgba(0,0,0,0.05),
              -5px -5px 5px rgba(225,225,225,0.5);
  border-radius: 15px;
  margin: 15px; 

&:hover {
  ${Box} {
    transform: scale(1.25); //translateY(-50px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    //background: linear-gradient(45deg, #fda085, #D7FFFE)
  }
  ${H2} {
    //color: rgba(0, 0, 0, 0.1);
  }
  ${A} {
    background: #70e000;
    color: #FFF;
  }
  ${H3} {
    //color: #FFF;
  }
  ${P} {
    //color: #FFF;
  }
}
`