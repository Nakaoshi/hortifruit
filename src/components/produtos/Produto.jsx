import React from "react";
import { Grid } from "@material-ui/core";
import Produto from "./produto/Produto";
import useStyles from './style';
import listaProdutos from "./ListaProdutos";


const Produtos = () => {
  const classes = useStyles()
  // const handleAddToCart = () => onAddToCart(product.id, 1);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {listaProdutos.map((produto) => (
          <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
            <Produto produto={produto} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Produtos;
