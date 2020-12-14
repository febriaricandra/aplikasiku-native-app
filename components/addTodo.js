import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const[text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
        <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})