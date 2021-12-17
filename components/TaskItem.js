import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const TaskItem = (props) => {
   return (
      <TouchableOpacity activeOpacity={0.7} onLongPress={props.onDelete.bind(this, props.id)}>
         <View style={styles.listItem}>
            <Text>{props.title}</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#f2f2f2',
      borderColor: '#d3d3d3',
      borderWidth: 1
   }
})

export default TaskItem