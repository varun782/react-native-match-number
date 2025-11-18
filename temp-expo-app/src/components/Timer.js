import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Timer can be driven externally via `timeLeft` prop (from a hook),
// or run internally if `duration` is provided.
const Timer = ({ duration, timeLeft: externalTimeLeft, onTimeUp }) => {
  const [internalTime, setInternalTime] = useState(duration ?? 0);

  useEffect(() => {
    if (externalTimeLeft != null) return; // external control; do nothing here

    setInternalTime(duration ?? 0);
    if (duration == null) return;

    const id = setInterval(() => {
      setInternalTime(prev => {
        if (prev <= 1) {
          clearInterval(id);
          onTimeUp && onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [duration, externalTimeLeft, onTimeUp]);

  const display = externalTimeLeft != null ? externalTimeLeft : internalTime;

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{(display ?? 0)}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Timer;