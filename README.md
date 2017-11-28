# react-native-railroad

#### This is a simple progress meter for react applications using `<svg>` element that can be configured through props.

[Component in use](res/railroad.png)

## Usage

```
npm install --save react-native-railroad
```
After installing the package simply import it and use it as a RailRoad component.

```
import RailRoad from 'react-native-railroad';

<RailRoad 
    index={2}
    max_index={5}
    style={style}
/>
```

## Props

Props | Default Values | Behaviour
----- | -------------- | --------
index|2| 
max_index|5| Total units in the railroad.
percent|0|Takes value from 0 - 1 and times with the width of the component to display the meter progress.


