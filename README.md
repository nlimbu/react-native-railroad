# react-native-railroad

#### This is a simple RailRoad component for react-native applications using `<Animated.View />` that can be configured through props.

[Image Link to the Component in use](res/railroad.png)

## Usage

```
npm install --save react-native-railroad
```
After installing the package simply import it and use it as a RailRoad component. 

RailRoad is a stateless functional component.
```
import { RailRoad } from 'react-native-railroad';

<RailRoad 
    index={2}
    max_index={3}
    circleSize={10}
    color="#fbb121"
    shape='circle'
    mode='exclusive'
/>
```

## Props

Props | Default Values | Behaviour
----- | -------------- | --------
max_index|4| Total units in the railroad.
color|"#e6e600"| The color to be applied mark the current state in the railroad. 
index|2|It marks the stages in the railroad. For a value of index=2 on a max_index value=4, the specified color will be applied to mark the two out of the max four units of the railroad.
shape|'circle'|Currently only two shapes can be used i.e. 'line' and  'circle'.
circleSize|10|Must be provided if shape has been defined as 'circle'.
mode|'exclusive' or 'inclusive'| 'Inclusive' mode will render all the shapes with the provided colors till the index value that marks the current stage in the railroad whereas 'exclusive' mode only colors the shape at index value and the remaining shapes wont be styled.
emptyFill|"#ccc"|If a color is provided the empty shapes will be styled with it or else an opaque style will be applied with a borderWidth of 1 and color value of '#ccc'.


