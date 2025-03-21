import { Box, Button, Grid2 } from '@mui/material';
import { Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import EuroIcon from '@mui/icons-material/Euro';

import SampleImage from '../../assets/sample.jpeg';
import { GridItemProps } from '../../types';

export const GridItem = ({ setSelectedItem, selectedItem, item }: GridItemProps) => {
    return (
        <div>
            <Grid2 columnSpacing={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} >
                <div onClick={() => setSelectedItem(item.id)} className={selectedItem === item.id ? 'item item-selected' : 'item'}>
                    <Box style={{ width: '100%', position: 'relative', display: 'flex', marginBottom: '15px', justifyContent: 'center' }}>
                        <img
                            className='skip-image'
                            src={SampleImage}
                            alt={`${item.size} Yard Skip`}
                        />
                        {item.allows_heavy_waste === false &&
                            <p className='private'><WarningIcon /> Private Property Only</p>
                        }
                        <p className='size'>{item.size} Yards</p>
                    </Box>
                    <Typography width='100%' gutterBottom textAlign='left' fontWeight='bold' variant='h5'>
                        <span>Size - </span>{item.size} Yard Skip
                    </Typography>
                    <Typography width='100%' gutterBottom textAlign='left' fontWeight='bold' variant='h5'>
                        <span>Period - </span>{item.hire_period_days} day hire period
                    </Typography>
                    <Typography display='flex' alignItems='center' width='100%' gutterBottom textAlign='left' fontWeight='bold' variant='h5'>
                        <span>Price - </span><span style={{ color: 'lightgreen', display: 'flex', alignItems: 'center', paddingRight: '5px' }}><EuroIcon />{item.price_before_vat}</span> per week
                    </Typography>
                    <Button className={selectedItem === item.id ? 'selected' : ''} color={selectedItem === item.id ? 'success' : 'info'} onClick={() => setSelectedItem(item.id)} variant='contained' fullWidth>
                        {selectedItem === item.id ? 'Selected' : 'Select This Skip'}
                    </Button>
                </div>
            </Grid2>
        </div>
    )
}
