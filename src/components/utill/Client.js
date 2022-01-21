import jwt from 'jsonwebtoken';
import { AppConstants } from '../../constants/AppConstants';

const options = data => {
    console.log(data)
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};

export const userLoginRequest = async (userLoginDetails) => {
    console.log('called');
    const res = await fetch(AppConstants.REST_URL_HOST + '/api/users/login', options(userLoginDetails));
    const res_1 = await res.json();
    if (res_1.success) {
        const token = res_1.token;
        delete res_1.token;
        console.log(token);
        localStorage.setItem('jwtToken', token);
    }
    return res_1;
}