export const BASE_URL = 'https://api.apilayer.com/currency_data'

const myHeaders = new Headers();
myHeaders.append("apikey", "lPVb9EIOUk31xvUOkSzS38LInUP0WAiv");

export const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

