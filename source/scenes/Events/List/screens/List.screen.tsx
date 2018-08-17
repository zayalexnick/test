import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ListRender from '../components/ListRender/ListRender.component';
import ListStore from '../stores/List.store';

export interface PropsInterface {
    List: ListStore;
}

export interface StateInterface {
    
}

@inject('List')
@observer
export default class List extends React.Component<PropsInterface, StateInterface>
{
    componentDidMount()
    {
        this.props.List.getEvents();
    }

    render()
    {
        const { events } = this.props.List;

        return (
            <ListRender items={events} />
        );
    }
}