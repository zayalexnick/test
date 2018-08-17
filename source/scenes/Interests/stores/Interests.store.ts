import BaseStore from "@/mobx/BaseStore";
import {action, computed, observable, ObservableMap} from "mobx";
import { PropsInterface as TagInterface } from "~/Interests/components/Tag/Tag.interfaces";

export default class InterestsStore extends BaseStore
{
    @observable items: TagInterface[] = [
        { id: 1, name: 'Кино', icon: 'Иконка', color: '#FF0000' },
        { id: 2, name: 'Музыка', icon: 'Иконка', color: '#00FF00' },
        { id: 3, name: 'Природа', icon: 'Иконка', color: '#FFFF00' },
        { id: 4, name: 'Спорт', icon: 'Иконка', color: '#0000FF' }
        ];
    @observable selected: ObservableMap<number, boolean> = observable.map();

    @action
    switchActive = (id: number) =>
    {
        if (this.selected.has(id))
            this.selected.delete(id);
        else
            this.selected.set(id, true);
    }

}