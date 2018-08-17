import * as React from 'react';
import * as _ from 'lodash';
import { withNavigation, NavigationContainerProps } from 'react-navigation';
import { PropsInterface, StateInterface } from './ListRender.interfaces';
import { Container, Item, Title, Description } from '../../styles/List.styles.native';
import { Button } from 'react-native';
import ItemInterface from "~/Events/interfaces/ItemInterface";

interface ItemPropsInterface extends ItemInterface {
    goTo: Function;
}

const ItemRender: React.SFC<ItemPropsInterface> = ({ title, description, goTo }): JSX.Element => (
    <Item onPress={() => goTo(1)}>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
    </Item>
);

@withNavigation
export default class ListRender extends React.Component<PropsInterface & NavigationContainerProps, StateInterface>
{
    goTo = (id: number) => {
        this.props.navigation.navigate('Item', { id });
    };

    render(): JSX.Element
    {
        const { items } = this.props;
        return (
            <Container>
                {
                    _.map(items, (item, index: string) => (
                        <ItemRender key={index} { ...item } goTo={this.goTo} />
                    ))
                }
                <Button onPress={() => this.props.navigation.navigate('Add')} title="Добавить" />
            </Container>
        );
    }
}