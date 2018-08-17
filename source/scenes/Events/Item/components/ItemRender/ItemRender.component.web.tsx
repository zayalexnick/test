import * as React from 'react';
import { PropsInterface, StateInterface } from './ItemRender.interfaces';
import { Container, Title, Description, Date, Price, Location } from '../../styles/Item.styles.web';

export default class ItemRender extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        const { item } = this.props;

        if (item)
            return (
                <Container>
                    <Title>{ item.title }</Title>
                    <Description>{ item.description }</Description>
                    <Date>Дата: { item.date }</Date>
                    <Price>Цена: { item.price }</Price>
                    <Location>Место: { item.location }</Location>
                </Container>
            );

        return <Container />;
    }
}