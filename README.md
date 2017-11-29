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
    max_index={4}
    color="#e6e600"
/>
```

## Props

Props | Default Values | Behaviour
----- | -------------- | --------
max_index|4| Total units in the railroad.
color|"#e6e600"| The color to be applied mark the current state in the railroad. 
index|2|It marks the stages in the railroad. For a value of index=2 on a max_index value=4, the specified color will be applied to mark the two out of the max four units of the railroad.


