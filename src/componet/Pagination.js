import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

const Paginations = ({ pageCount, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    };

    const renderPageButtons = () => {
        const buttons = [];

        for (let i = 1; i <= pageCount; i++) {
            buttons.push(
                <Button
                    key={i}
                    onClick={() => {
                        setCurrentPage(i);
                        onPageChange(i);
                    }}
                    isActive={currentPage === i}
                    colorScheme="teal"
                    variant="outline"
                    ml={2}
                    border={currentPage === i ? '1px solid aqua' : 'none'}
                >
                    {i}
                </Button>
            );
        }

        return buttons;
    };

    return (
        <Box margin={'auto'}>
            {pageCount > 0 && (
                <Box className="pagination_div d-flex justify-content-end mx-5">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        colorScheme="teal"
                        variant="outline"
                        border={'none'}
                        cursor={'pointer'}
                    >
                        {'<< <'}
                    </Button>
                    {renderPageButtons()}
                    <Button
                        onClick={handleNext}
                        disabled={currentPage === pageCount}
                        colorScheme="teal"
                        variant="outline"
                        ml={2}
                        border={'none'}
                        cursor={'pointer'}
                    >
                        {'> >>'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Paginations;
