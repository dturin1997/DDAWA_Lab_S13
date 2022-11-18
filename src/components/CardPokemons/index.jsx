import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
        {pokemons.length > 0 &&
          pokemons.map(({ pokemon }) => (
            <Grid item xs={12} sm={4}>
              <Card 
                sx={{ backgroundColor: 'rgb(250, 194, 19)', padding: "25px"  }}
              >
                <CardMedia
                  class="card-media"
                  sx={{ borderRadius: '50%', backgroundColor: 'rgb(255, 250, 215)' }}
                  component="img"
                  width={300}
                  height={250}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon.url.split("/")[6]
                  }.png`}
                />
                <CardContent>
                  <Typography variant="body1"
                  sx={{ color:'red', fontWeight: 'bold' }}>{pokemon.name}</Typography>
                  
                  <Button
                    sx={{ color:'green', fontWeight: 'bold' }}
                  >Ver detalle</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardPokemons;