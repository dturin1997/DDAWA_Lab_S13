import { Paper, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const BookItem = ({books}) => {
    return (
        <Paper elevation={3}>
            <CardMedia 
                component="img"
                image={books.volumeInfo?.imageLinks?.thumbnail}
                height={200}
            />
            <CardContent>
                <Box>
                    
                </Box>
            </CardContent>

        </Paper>
    )
}