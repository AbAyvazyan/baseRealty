import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationGroup() {

    const scrollPaginateHandler = (value:number) =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })

        console.log(value)
    }

    return (
        <Stack spacing={2} sx={{display:'flex',justifyContent:'center'}}>
            <Pagination onChange={(e,value)=>scrollPaginateHandler(value)} count={10} sx={{display:'flex',justifyContent:'center'}} variant="outlined" shape="rounded" />
        </Stack>
    );
}