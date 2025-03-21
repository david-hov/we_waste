import { Container } from '@mui/material';
import type { ReactNode } from 'react';
import { Layout as RALayout } from 'react-admin';

const NoSideBarAppBar = () => <></>

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <RALayout sidebar={NoSideBarAppBar}>
            <Container sx={{
                maxWidth: '1600px',
            }}>
                {children}
            </Container>
        </RALayout>
    )
};
