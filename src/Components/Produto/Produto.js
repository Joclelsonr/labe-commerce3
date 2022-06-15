import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 320px;
  width: 202px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
`

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 125px;
  width: 200px;
  gap: 8px;
`

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class Produto extends React.Component {

    state = {
      produto: [{
        id: "1",
        imagem: "https://picsum.photos/seed/picsum/200/250",
        nome: "Produto 1",
        preco: "100"
      },
      {
        id: "2",
        imagem: "https://picsum.photos/seed/picsum/200/250",
        nome: "Produto 2",
        preco: "3500"
      }
    ]
    }

    render() {
      const componenteProduto = this.state.produto.map((produto) => {
        return(
          <Card>
            <Img src={produto.imagem} />
            <ContainerTexto>
            <p>{produto.nome}</p>
            <p>R$:{produto.preco}</p>
            <button>Adicionar ao carrinho</button>
            </ContainerTexto>
          </Card>
        );
      });

      return(
        <ContainerCard>{componenteProduto}</ContainerCard>
  )}
}

export default Produto

