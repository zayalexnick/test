import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';

import ItemStore from '../stores/Item.store';
import ItemRender from '../components/ItemRender/ItemRender.component';

interface PropsInterface extends RouteComponentProps<any> {
    ItemStore: ItemStore;
}

interface StateInterface {

}

@inject('ItemStore')
@observer
export default class Item extends React.Component <PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this.props.ItemStore.getItem(1);
    }

    render(): JSX.Element
    {
        const { item } = this.props.ItemStore;

        return (
            <ItemRender item={item} />
        );
    }
}