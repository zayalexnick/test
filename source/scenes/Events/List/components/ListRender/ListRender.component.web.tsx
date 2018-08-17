import * as React from 'react';
import * as _ from 'lodash';
import { PropsInterface, StateInterface } from './ListRender.interfaces';
import { Container, Item, Title, Description } from '../../styles/List.styles.web';
import ItemInterface from "~/Events/interfaces/ItemInterface";

interface ItemPropsInterface extends ItemInterface {

}

const ItemRender: React.SFC<ItemPropsInterface> = ({ title, description }): JSX.Element => (
    <Item to="/events/1">
        <Title>{ title }</Title>
        <Description>{ description }</Description>
    </Item>
);

export default class ListRender extends React.Component<PropsInterface, StateInterface>
{

    render(): JSX.Element
    {
        const { items } = this.props;

        return (
            <Container>
                {
                    _.map(items, (item, index: string) => (
                        <ItemRender key={index} { ...item } />
                    ))
                }
            </Container>
        );
    }
}