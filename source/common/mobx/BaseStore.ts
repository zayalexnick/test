import { observable } from 'mobx';
import PendingEnum from './enums/Pending';
import HTTPService, { instance } from "@/services/HTTPService";

interface StoreInterface {
    pending: PendingEnum;
    error: string;
}

export default class BaseStore implements StoreInterface
{
    @observable pending: PendingEnum;
    @observable error: string;

    http: HTTPService = new HTTPService(instance);
}