import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Product } from "../../app/models/product"

type Props = {
    product: Product
}

export default function ProductCard({product}: Props) {
  return (
    <Card elevation={3}
        sx={{
            width:280,
            borderradius:2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
        >
        <CardMedia sx={{height: 240, backgroundSize: 'cover'}}
            image={product.pictureUrl}
            title={product.name}
            />

        <CardContent>
            <Typography
                gutterBottom
                variant='subtitle2'            
                sx={{textTransform:'uppercase'}}>
                    {product.name}
            </Typography>

            <Typography
                gutterBottom
                variant='subtitle2'            
                sx={{color:'secondary.main'}}>
                    ${(product.price / 100).toFixed(2)}
            </Typography>

        </CardContent>
        <CardActions
            sx={{justifyContent:'space-between'}}>
            <Button>Add to Cart</Button>
            <Button>View</Button>
        </CardActions>
    </Card>
  )
}