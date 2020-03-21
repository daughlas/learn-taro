import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Dialog from './dialog'

export default class TestDialog extends Component {
  render() {
    return (
      <View className='index'>
        <Dialog
          renderMe={
            <View className='welcome-message'>Welcome!</View>
          }
        >
          <Text>我是 Text 传入的</Text>
        </Dialog>
      </View>
    )
  }
}
