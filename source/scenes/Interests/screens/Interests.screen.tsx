import * as React from 'react';
import { inject } from "mobx-react";
import InterestsStore from "../stores/Interests.store";
import InterestsRender from '../components/InterestsRender/InterestsRender.component';

interface PropsInterface {
    Interests: InterestsStore
}

interface StateInterface {

}

@inject('Interests')
export default class extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        const { selected, switchActive, items } = this.props.Interests;

        return (
            <InterestsRender switchActive={switchActive} selected={selected} items={items} />
        );
    }
}