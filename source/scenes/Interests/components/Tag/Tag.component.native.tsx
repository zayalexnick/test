import * as React from 'react';
import { observer } from "mobx-react";
import { Tag } from '../../styles/Interests.styles';
import { PropsInterface as TagInterface } from "./Tag.interfaces";
import { FeedBack } from "@/components/Touchable/Touchable";

interface PropsInterface extends TagInterface {
    selected: boolean;
    switchActive: Function;
}

interface StateInterface {

}

@observer
export default class extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        const { color, selected, id, name, switchActive } = this.props;

        return (
            <Tag color={color} selected={selected} feedback={FeedBack.NoFeedback} onPress={() => switchActive(id)} >{name}</Tag>
        );
    }
}