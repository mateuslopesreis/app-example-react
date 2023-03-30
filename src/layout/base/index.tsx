import {AppBar, Toolbar, Typography} from '@mui/material'
import  Box  from '@mui/material/Box'
type BaseLayoutProps ={
    children: React.ReactNode,
    appBarTitle: String
}

export function Base({children,appBarTitle}:BaseLayoutProps){
    return(
        <>
        <AppBar>
            <Toolbar>

                    <Typography variant='h5'>{appBarTitle}</Typography>

            </Toolbar>
        </AppBar>

        <Box >
                {children}
        </Box>
        </>
    )
}