import { observable, action } from "mobx";
import BaseStore from "@/mobx/BaseStore";
import ItemInterface from "~/Events/interfaces/ItemInterface";


export default class ListStore extends BaseStore
{
    @observable events: ItemInterface[] = [];

    @action
    getEvents()
    {
        this.events = [
            {
                id: 1,
                title: 'Первое событие',
                description: 'Описание первого события',
                date: 'Дата',
                location: 'Место'
            },
            {
                id: 2,
                title: 'Второе событие',
                description: 'Описание второго события',
                date: 'Дата',
                location: 'Место'
            },
            {
                id: 3,
                title: 'Третье событие',
                description: 'Описание третьего события',
                date: 'Дата',
                location: 'Место'
            },
        ];
    }
}