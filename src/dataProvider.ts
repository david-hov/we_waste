import Axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;


export const dataProvider: any = {
    getList: async (resource: any, _: any): Promise<any> => {
        const url = `${apiUrl}/${resource}/by-location?postcode=NR32&area=Lowestoft`;
        return Axios.get(url).then((res) => {
            return ({
                data: res.data,
                total: parseInt(res.data.length),
            })
        });
    },
};
