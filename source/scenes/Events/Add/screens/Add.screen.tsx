import * as React from 'react';

import Form from '../components/Form/Form.component';
import ItemInterface from "../../interfaces/ItemInterface";

interface PropsInterface {
    
}

interface StateInterface {

}

export default class Add extends React.Component<PropsInterface, StateInterface & ItemInterface>
{
    state = {
        id: 0,
        title: '',
        description: '',
        date: '',
        location: '',
        price: 0
    };

    set title(_title: string)
    {
        this.setState({ title: _title });
    }

    get title(): string
    {
        return this.state.title;
    }

    set description(_description: string)
    {
        this.setState({ description: _description });
    }

    get description(): string
    {
        return this.state.description;
    }

    set date(_date: string)
    {
        this.setState({ date: _date });
    }

    get date(): string
    {
        return this.state.date;
    }

    set location(_location: string)
    {
        this.setState({ location: _location });
    }

    get location(): string
    {
        return this.state.location;
    }

    set price(_price: number)
    {
        this.setState({ price: _price });
    }

    get price(): number
    {
        return this.state.price;
    }

    render(): JSX.Element
    {
        return <Form parent={this} />;
    }
}