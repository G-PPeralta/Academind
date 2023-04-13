import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem} >
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: 'ddd' }}
      >
        <Text style={styles.goalText}>{props.textContent}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});

export default GoalItem;
