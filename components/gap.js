import React from 'react';
import { View } from 'react-native';

export default class Gap extends React.Component
{
    render()
    {
        return (
            <View style={{height: parseInt(this.props.size)}}></View>
        )
    }
}