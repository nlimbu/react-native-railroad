import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';

export default class RailRoad extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { max_index, index, style } = this.props;
        const width = (Dimensions.get('window').width / max_index) - 12;

        let rail_styles = [];
        for (let i = 0; i < max_index; i++) {
            const color = index > i ? '#e6e600' : '#c2c2a3';

            rail_styles.push({
                alignSelf: 'center',
                borderRadius: 1,
                height: 4,
                marginRight: 2,
                backgroundColor: color,
                width: width
            });
        }

        return (
            <View style={styles.main} >
                {
                    rail_styles.map((rail_Style, i) => {
                        return (
                            <Animated.View key={i} style={[rail_Style, style]} />
                        )
                    })
                }
            </View>
        )
    }
}

const styles = {
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
};
