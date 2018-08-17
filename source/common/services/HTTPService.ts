import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
//import Auth from 'gl-auth-bridge';
import { Storage } from '@/components';

class HTTPService
{
    instance: AxiosInstance;
    //auth: Auth = Auth;

    constructor(_instance: AxiosInstance)
    {
        this.instance = _instance;
        this.refreshTokenInterception();
    }

    async setToken(_token: string)
    {
        await Storage.setItem('token', _token);
        this.instance.defaults.headers['TOKEN'] = _token;
    }

    private refreshTokenInterception()
    {
        this.instance.interceptors.response.use((response: AxiosResponse) => response, async (error: AxiosError) => {
            
            /*if (error.response && error.response.status === 401) {
                const { accessToken } = await this.auth.refreshToken();
                await this.setToken(accessToken);
                return this.instance;
            }*/

            return Promise.reject(error);
        });
    }

    async getToken()
    {
        try
        {
            //const { accessToken } = await this.auth.getToken();
            //return accessToken;
        }
        catch(e)
        {
            throw new Error(e);
        }
    }

    async get(path: string): Promise<AxiosResponse>
    {
        return await this.instance.get(path);
    }
    
    async post(path: string, body: object): Promise<AxiosResponse>
    {
        return await this.instance.post(path, body);
    }
}

export const instance = axios.create({

});

export default HTTPService;