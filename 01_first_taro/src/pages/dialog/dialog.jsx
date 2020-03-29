import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Dialog extends Component {
  render() {
    return (
      <View className='index'>
        {
          this.props.renderMe
        }
        {
          this.props.children
        }
      </View>
    )
  }
}
