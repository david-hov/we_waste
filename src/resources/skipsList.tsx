import { Grid2, Typography } from '@mui/material';
import { Empty, Form, List, Loading, NotFound, SelectInput, useListContext } from 'react-admin';
import { useMemo, useState } from 'react';

import { GridItem } from './components/item';
import { SkipItem } from '../types';

const allowedSizes = [4, 5, 6, 8, 10, 12, 14, 16, 20, 40];

const SkipsView = () => {
    const { data, error, isLoading } = useListContext();
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const filteredData = useMemo(() => {
        return data?.filter((item: SkipItem) => {
            return selectedSize ? item.size === selectedSize : true;
        }) || [];
    }, [data, selectedSize]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <NotFound />;
    }

    return (
        <>
            <div className='toolbar'>
                <Form>
                    <Typography textAlign='center' fontWeight='bold' variant='h3'>
                        Choose Your Skip Size
                    </Typography>
                    <Typography textAlign='center' variant='h6'>
                        Select the skip size that best suits your needs
                    </Typography>
                    <SelectInput
                        emptyText='All'
                        emptyValue='All'
                        defaultValue='All'
                        style={{ width: '220px', margin: '0' }}
                        label='Select Size'
                        source='size'
                        choices={allowedSizes.map((size) => ({ id: size, name: `${size} Yard` }))}
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(Number(e.target.value))}
                    />
                </Form>
            </div>
            <div style={{ margin: '25px 0', padding: '0 25px' }}>
                {filteredData && filteredData.length !== 0 ?
                    <Grid2 justifyContent='center' container spacing={2}>
                        {filteredData.map((item: SkipItem) => (
                            <GridItem key={item.id} setSelectedItem={setSelectedItem} selectedItem={selectedItem} item={item} />
                        ))}
                    </Grid2>
                    : <Empty />}
            </div>
        </>
    );
};

export const SkipsList = () => {
    return <List pagination={false} exporter={false}>
        <SkipsView />
    </List>;
};
