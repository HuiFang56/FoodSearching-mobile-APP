import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer S0yrqbFDMhSHUwUulejd1jm-UT-3-JhFsPgdRGAF5qr-hXXpjUn6lGQbdC9h_WvZ2mdng8ANWw9V4jttE0oUKrT5E5Dt2A7UDjIWbKPmcAVdczPF6UJEcH8LfqCPX3Yx'
    }
}); 