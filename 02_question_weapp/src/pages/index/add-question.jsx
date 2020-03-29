import Taro, { Component} from '@tarojs/taro'
import {View, Input, Textarea, Button} from '@tarojs/components'
import Dialog from './dialog'
import './add-question.styl'

export default class AddQuestion extends Component {

  state = {
    title: '',
    desc: ''
  }

  btnCancel = () => {
    this.props.onCloseQuestion && this.props.onCloseQuestion()
  }

  btnOk = () => {
    // 校验数据
    if (this.state.title && this.state.desc) {
      this.props.onReceiveQuestion && this.props.onReceiveQuestion(this.state)
    } else {
      Taro.showToast({
        title: '请输入标题或者描述',
        icon: 'none'
      })
    }
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  changeDesc = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render() {
    return (
      <Dialog>
        <View className='add-question'>
          <View className='question-body'>
            <Input focus onInput={this.changeTitle} className='question-title' placeholder='请输入您的问题标题'></Input>
            <Textarea onInput={this.changeDesc} className='question-desc' placeholder='请输入您的问题描述'></Textarea>
            <View className='btn-group'>
              <Button onClick={this.btnOk} className='btn-question btn-question-ok'>确定</Button>
              {/* <Button onClick={() => {this.props.onCloseQuestion()}} className='btn-question btn-question-cancel'>取消</Button> */}
              <Button onClick={this.btnCancel} className='btn-question btn-question-cancel'>取消</Button>
            </View>
          </View>
        </View>
      </Dialog>

    )
  }
}
