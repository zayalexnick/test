import * as React from 'react';
import { map } from 'lodash';
import { Container, Button, Text } from "../../styles/Interests.styles";
import Tag from "../Tag/Tag.component";
import { observer } from "mobx-react";
import { PropsInterface, StateInterface } from "./InterestsRender.interfaces";
import {NavigationContainerProps, withNavigation} from "react-navigation";

@withNavigation
@observer
export default class InterestsRender extends React.Component<PropsInterface & NavigationContainerProps, StateInterface>
{
    render(): JSX.Element
    {
        const {items, selected, switchActive } = this.props;

        return (
            <Container>
                { map(items, (item, index) => (
                    <Tag { ...item } key={index} selected={selected.has(item.id)} switchActive={switchActive} />
                )) }
                <Button onPress={() => this.props.navigation ? this.props.navigation.navigate('List') : null}>
                    <Text>{selected.size === 0 ? 'Пропустить' : 'Продолжить'}</Text>
                </Button>
            </Container>
        );
    }
}