import { Card, CardContent, Container, Box, Button, TextField } from "@mui/material";
import { useEffect, useState} from "react"

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
    const [search,setSearch] = useState("");
    const handleSearch = async () => {
        try{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`);
            const data = await response.json()
            console.log(data)
        }catch{
            console.log("Error ", error)
        }
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
        </Container>
    );
};

export default Books;