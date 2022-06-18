import React from "react";
import styled from "styled-components";
import lupa from "../../img/lupa.png";
import iconefechar from "../../img/iconefechar.png";

const ContainerFiltros = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 5px;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  height: 70px;
`;

const Titulo = styled.h3`
  margin-left: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 18%;
  padding: 6px 6px;
  border-radius: 8px;
`;

const Botao = styled.button`
  padding: 8px 0px;
  border-radius: 7px;
  background-color: blueviolet;
  color: #fff;
  border: none;
  width: 120px;
  height: 30px;
`;

const Img = styled.img`
  width: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerTituloInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

class Filtro extends React.Component {

  render() {
    return (
      <ContainerFiltros>
        <div>
          <Titulo onClick={() => this.props.renderizarInputsBuscar()}>Faça sua Busca</Titulo>
        </div>
        {this.props.buscar ? (
          <ContainerTituloInputs>
            <Img src={iconefechar} onClick={() => this.props.renderizarInputsBuscar()}/>
            <Input
              type="text"
              value={this.props.inputBuscar}
              onChange={this.props.onChangeInputBuscar}
              placeholder="Nome do produto"
            />
            <Input
              type="number"
              value={this.props.inputValorMin}
              onChange={this.props.onChangeInputValorMin}
              placeholder="Valor mínimo"
            />
            <Input
              type="number"
              value={this.props.inputValorMax}
              onChange={this.props.onChangeInputValorMax}
              placeholder="Valor máximo"
            />
            <Botao onClick={this.props.limparFiltro}>Limpar filtros</Botao>
          </ContainerTituloInputs>
        ) : 
          <Img src={lupa} onClick={() => this.props.renderizarInputsBuscar()} />
        }
      </ContainerFiltros>
    );
  }
}

export default Filtro;
