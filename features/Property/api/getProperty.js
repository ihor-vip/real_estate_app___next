import { axios } from '@/library/axios';

export const getProperty = async (id) => {
    const {data} = await axios.get('/properties/detail',{
        params: {externalID: id}
    })
    return data;
}