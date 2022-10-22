import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';


const GREY = '#adad85';
const OPAQUE = 'rgba(0,0,0,0)';

export const RailRoad = (props) => {
    const defaultWidth = (Dimensions.get('window').width / props.maxIndex) - 12;
    const { maxIndex, index, color = '#e6e600', shape, mode, width = defaultWidth, height = 4, circleSize, emptyFill } = props;
    const shapeStyle =
        shape === 'line' ?
            { width, height, marginHorizontal: 1 } :
            shape === 'circle' ?
                { borderRadius: circleSize / 2, width: circleSize, height: circleSize, marginHorizontal: circleSize / 2 } :
                0;

    let railStyles = [];
    for (let i = 1; i <= maxIndex; i++) {
        const style = mode === 'inclusive' ?
            index >= i ?
                { ...shapeStyle, backgroundColor: color } :
                emptyFill ? { ...shapeStyle, backgroundColor: emptyFill } : { ...shapeStyle, backgroundColor: OPAQUE, borderWidth: 1, borderColor: GREY } :
            index === i ?
                { ...shapeStyle, backgroundColor: color } :
                emptyFill ? { ...shapeStyle, backgroundColor: emptyFill } : { ...shapeStyle, backgroundColor: OPAQUE, borderWidth: 1, borderColor: GREY };

        railStyles.push({
            alignSelf: 'center',
            ...style
        });
    }

    return (
        <View style={styles.railroad} >
            {
                railStyles.map((style, i) => {
                    return (
                        <Animated.View key={i} style={style} />
                    )
                })
            }
        </View>
    )
}

RailRoad.propTypes = {
    maxIndex: PropTypes.number.isRequired,
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
