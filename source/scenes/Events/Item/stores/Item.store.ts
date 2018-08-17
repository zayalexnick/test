import { observable, action } from 'mobx';
import ItemInterface from "~/Events/interfaces/ItemInterface";
import BaseStore from "@/mobx/BaseStore";

export default class ItemStore extends BaseStore
{
    @observable item: ItemInterface;

    @action
    getItem(_id: number)
    {
        this.item = {
            id: _id,
            title: 'Второе событие',
            description: 'Описание второго события',
            date: '01.01.2018 23:30',
            price: 0,
            location: 'улица Есенина, дом Каруселина'
        };
    }
}