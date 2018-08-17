import * as React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Platform, Text, View } from 'react-native';
import {TouchableProps} from "react-native-svg";

export enum FeedBack {
    Native,
    Opacity,
    NoFeedback
}

interface PropsInterface extends TouchableProps {
    feedback: FeedBack;
}

interface StateInterface {

}

interface ParentInterface {
    feedback: FeedBack;
}

const Parent: React.SFC<ParentInterface> = ({ feedback, children, ...props }) => {
    switch (feedback) {
        case FeedBack.Native:
            return Platform.OS === 'ios' ? <TouchableOpacity { ...props } >{ children }</TouchableOpacity> : <TouchableNativeFeedback { ...props }>{ children }</TouchableNativeFeedback>;
        case FeedBack.Opacity:
            return <TouchableOpacity { ...props }>{ children }</TouchableOpacity>;
        case FeedBack.NoFeedback:
            return <TouchableOpacity { ...props } activeOpacity={1}>{ children }</TouchableOpacity>;
    }
};

export default class Touchable extends React.Component<PropsInterface, StateInterface>
{
    static defaultProps = {
        feedback: FeedBack.Native
    };

    render(): JSX.Element
    {
        const { children, ...otherProps } = this.props;

        return (
            <Parent { ...otherProps }>
                    { typeof children === 'string' ?
                        (
                            <Text>{ children }</Text>
                        ) :
                            children
                    }
            </Parent>
        )
    }
}