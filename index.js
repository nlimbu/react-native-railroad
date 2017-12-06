import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const GREY = '#adad85';
const OPAQUE = 'rgba(0,0,0,0)';

export const RailRoad = (props) => {
    const default_width = (Dimensions.get('window').width / props.max_index) - 12;
    const { max_index, index, color = '#e6e600', shape, mode, width = default_width, height = 4, circleSize, emptyFill } = props;
    const shape_style =
        shape === 'line' ?
            { width, height, marginHorizontal: 1 } :
            shape === 'circle' ?
                { borderRadius: circleSize / 2, width: circleSize, height: circleSize, marginHorizontal: circleSize / 2 } :
                0;

    let rail_styles = [];
    for (let i = 1; i <= max_index; i++) {
        const style = mode === 'inclusive' ?
            index >= i ?
                { ...shape_style, backgroundColor: color } :
                emptyFill ? { ...shape_style, backgroundColor: emptyFill } : { ...shape_style, backgroundColor: OPAQUE, borderWidth: 1, borderColor: GREY } :
            index === i ?
                { ...shape_style, backgroundColor: color } :
                emptyFill ? { ...shape_style, backgroundColor: emptyFill } : { ...shape_style, backgroundColor: OPAQUE, borderWidth: 1, borderColor: GREY };

        rail_styles.push({
            alignSelf: 'center',
            ...style
        });
    }

    return (
        <View style={styles.railroad} >
            {
                rail_styles.map((style, i) => {
                    return (
                        <Animated.View key={i} style={style} />
                    )
                })
            }
        </View>
    )
}

RailRoad.propTypes = {
    max_index: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    emptyFill: PropTypes.string,
    color: PropTypes.string,
    shape: PropTypes.oneOf(['line', 'circle']).isRequired,
    mode: PropTypes.oneOf(['inclusive', 'exclusive']).isRequired,
    circleSize: function (props, propName, componentName) {
        if (props['shape'] == 'circle' && !props['circleSize']) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }
};

const styles = {
    railroad: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
};
