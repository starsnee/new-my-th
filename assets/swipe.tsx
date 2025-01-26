import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { Easing, withSpring, useAnimatedGestureHandler, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

// SwipeableCard Component
const SwipeableCard: React.FC = () => {
  // Define shared values for translation
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gesture handler
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      // If swipe exceeds threshold, move card completely
      if (Math.abs(translateX.value) > width / 4) {
        translateX.value = withSpring(translateX.value > 0 ? width : -width, { damping: 10 });
      } else {
        translateX.value = withSpring(0, { damping: 20 });
      }
    },
  });

  // Animated style for the card
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }, // Optional: vertical movement
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.cardText}>Swipe Me!</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8, // Card width 80% of screen width
    height: 300, // Card height
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  cardText: {
    fontSize: 24,
    color: '#000',
  },
});

export default SwipeableCard;
