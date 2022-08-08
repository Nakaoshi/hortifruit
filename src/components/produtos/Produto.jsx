import React from "react";
import { Grid } from "@material-ui/core";
import Produto from "./produto/Produto";
import useStyles from './style';
import { APIFrutas } from "../../lib/GetFrutas";





// [
//   { id: 1, nome: "Shoes", descricao: "Sapato", preco: "$5", image:"https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg"},
//   { id: 2, nome: "Mackbook", descricao: "Macbook", preco: "$10", image:"https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png"}
// ];

const Produtos = () => {
  const classes = useStyles()
  const produtos = APIFrutas() 
  const teste = () =>{ console.log(produtos)}

  return (
    <main onLoad={teste()} className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {produtos.map((produto) => (
          <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
            <Produto produto={produto} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Produtos;
