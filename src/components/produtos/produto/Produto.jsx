import React from "react";
import {Card,CardMedia, CardContent, CardActions,Typography,IconButton,} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";

const Produto = ({ produto }) => {
  const classes = useStyles();
  // const handleAddToCart = () => onAddToCart(produto.id, 1);
  return (
    <div>
      <Card className={classes.root}>
      <CardMedia className={classes.media} image={produto.image} title={produto.nome} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {produto.nome}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${produto.price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: produto.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" >
        {/* onClick={handleAddToCart} */}
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

export default Produto;
