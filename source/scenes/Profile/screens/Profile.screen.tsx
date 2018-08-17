import * as React from 'react';
import { inject, observer } from "mobx-react";
import ProfileRender from '../components/ProfileRender/ProfileRender.component';

interface PropsInterface {

}

interface StateInterface {

}

@inject('Profile')
@observer
export default class Profile extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        return (
            <ProfileRender />
        );
    }
}