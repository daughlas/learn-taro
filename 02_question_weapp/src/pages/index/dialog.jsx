import Taro, { Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import './dialog.styl'

export default class Dialog extends Component {
  render() {
    return (
      <View className='dialog'>
        {this.props.children}
      </View>
    )
  }
}
