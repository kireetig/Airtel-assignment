import axios from 'axios';

export function test(num) {
    const url = `${base}/api/profile/userAvailability?primaryContact=${num}`;
    return axios.get(url)
        .then((res, err) => {
            if (err) return err;
            return res;
        });
}

export function getBurgers() {
    const url = 'http://demo2343712.mockable.io/myburger';
    return axios.get(url)
        .then((res, err) => {
            if (err) return err;
            return res;
        });
}