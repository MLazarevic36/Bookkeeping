import React from "react"
import styled from "styled-components"
import ReactPaginate from "react-paginate"
import { Box } from "@chakra-ui/layout"
import { LeftArrow, RightArrow } from "../Icons"

const Pagination = ({ paginationData, fetchPage }) => {
    
	// const handlePageChange = (item) => {
    //     fetchPage(paginationData.pageSize, item.selected + 1)
    // }

    return (
        <PaginationStyle>
            <Box mx="auto" h="40px">
                <ReactPaginate
                    previousLabel={<LeftArrow />}
                    nextLabel={<RightArrow />}
                    breakLabel={"..."}
                    pageCount={paginationData.totalPages}
                    // onPageChange={handlePageChange}
                    containerClassName={"pagination-container"}
                    activeClassName={"activePag"}
                />
            </Box>
        </PaginationStyle>
    )
}

const PaginationStyle = styled.div`
    width: 96%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    .pagination-container {
        margin: 0 auto;
        width: 400px;
        height: 40px;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            width: 20px;
            cursor: pointer;
        }
        a[aria-current="page"] {
            padding: 0 !important;
            text-align: center;
            outline: none;
        }
        a {
            border-radius: 5px;
            padding: 5px;
            font-size: 17px;
            outline: none;
        }
        a[aria-label="Next page"],
        a[aria-label="Previous page"] {
            :focus {
                outline: auto;
                outline-color: var(--mc_medium);
            }
        }
        .activePag a {
            display: block;
            background: var(--mc_medium);
            color: white;
            width: 100%;
        }
        li.previous,
        li.next {
            display: flex;
            justify-content: center;
        }
    }
    @media (max-width: 920px) {
        .pagination-container {
            width: 150px;
        }
    }
`
export default Pagination