import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {FC} from "react";

type TPaginationGroup = {
    pageInfo?: any
    changePage: (num: number) => void
}

const PaginationGroup: FC<TPaginationGroup> = ({pageInfo, changePage}) => {

    const scrollPaginateHandler = (value: number) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        changePage(value)
    }

    const pageCount = pageInfo?.page_range?.length || 1;


    return (
        <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
            <Pagination onChange={(e, value) => scrollPaginateHandler(value)}
                        count={pageCount}
                        sx={{display: 'flex', justifyContent: 'center'}} variant="outlined" shape="rounded"/>
        </Stack>
    );
}

export default PaginationGroup