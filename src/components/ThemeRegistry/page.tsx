'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        mode: 'light', // You can switch to 'dark' if needed
    },
});

interface ThemeRegistryProps {
    children: ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
