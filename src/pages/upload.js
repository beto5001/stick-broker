import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Typography } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';

import { DashboardLayout } from "../components/dashboard-layout";
import { useState } from "react";

const Upload = () => {

    const [file, setFile] = useState(null);

    const readFile = (event) => {
        setFile(event.target.files[0]);
    }

    return <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 2
            }}
        >
            <Container maxWidth="lg">
                <Card>
                    <CardHeader title="Upload"/>
                </Card>
            </Container>
            <Container maxWidth="lg" sx={{py: 2}}>
                <Card>
                    <CardContent>
                        <LoadingButton
                            variant="outlined"
                            component="label"
                            endIcon={<AttachFileIcon/>}
                        >
                            {
                                file ? 
                                file.name : 
                                'Arquivo'
                            }
                            <input
                                hidden
                                type="file"
                                onClick={(event)=> { 
                                    event.currentTarget.value = null
                               }}
                                onChange={(event)=> { 
                                    readFile(event) 
                                }}
                            />
                        </LoadingButton>
                        {
                            file && 
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => setFile(null)}
                                sx={{marginLeft: 1}}
                            >
                                x
                            </Button>
                        }
                    </CardContent>
                </Card>
            </Container>
        </Box>
    </>
}

Upload.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Upload;