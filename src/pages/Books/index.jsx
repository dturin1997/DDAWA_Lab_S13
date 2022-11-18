import { Card, CardMedia, Typography, CardContent, Container, Box, Button, TextField, Grid } from "@mui/material";
import { useEffect, useState} from "react";
import { searchBooks } from "../../services";

const Books = () => {
    /*
    const [books,setBooks] = useState([]);
    const searchBooks = async (search) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        const busqueda = await response.json();
        console.log(busqueda);

    }

    const handleChange = (event) => {
        console.log(event.target.valu)
        //setBooks(event.target.value);
        //searchBooks(event.target.value);
    };

    useEffect(() => {
        // llamo a la funciona
        searchBooks("Pokemon");
    }, []);
    */
    const [ search, setSearch ] = useState("");
    const [ booksArray, setBooksArray] = useState([])
    /*
    const handleSearch = async () => {
        try{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`);
            const data = await response.json()
            console.log(data)
        }catch{
            console.log("Error ", error)
        }
    }
    */
    const handleSearch = async () => {
        const books = await searchBooks(search);
        console.log(books);
        setBooksArray(books.items);

    }
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Card>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 3,
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Buscar un libro"
                                fullWidth
                                size="small"
                                variant="outlined"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <Box my={2}>
                                <Button size="large" variant="contained"
                                    onClick={handleSearch}
                                >
                                    Buscar
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                    
                </Card>
            </Box>
{/* 
            <Box>
                <Grid container spacing={3} mt={3}>
                    {booksArray.length > 0 &&
                    booksArray.map(({volumeInfo}, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card 
                                sx={{ backgroundColor: 'rgb(250, 194, 19)', padding: "25px"  }}
                            >
                                <CardMedia
                                className="card-media"
                                sx={{ borderRadius: '50%', backgroundColor: 'rgb(255, 250, 215)' }}
                                component="img"
                                width={300}
                                height={250}
                                image={volumeInfo?.imageLinks?.thumbnail}
                                />
                                <CardContent>
                                <Typography variant="body1"
                                sx={{ color:'red', fontWeight: 'bold' }}>{volumeInfo.title}</Typography>
                                
                                <Button
                                    sx={{ color:'green', fontWeight: 'bold' }}
                                >Ver detalle</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
*/}
        </Container>
    );
};

export default Books;