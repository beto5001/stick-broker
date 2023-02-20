import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const FormBuilder = ({ initialValues, textCallBack }) => {

    const [values, setValues] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        values[name] = value;
        setValues(values);
        console.log(values);
    }

    return (
        <form>
            {
                initialValues.map((value, i) => (
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", my: 2 }}>
                        <TextField id={value}
                            name={value}
                            label={value}
                            placeholder={value}
                            onChange={handleChange}
                        />
                    </Box>
                ))
            }
            <Button
                fullWidth
                variant='contained'
                onClick={() => textCallBack(values)}
            >
                Substituir dados
            </Button>
        </form>
    )
}

export default FormBuilder;