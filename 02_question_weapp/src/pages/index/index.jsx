import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.styl'
import AddQuestion from './add-question'
import Yes from '../../img/yes.png'
import No from '../../img/no.png'

function getStore(key) {
  let str = Taro.getStorageSync(key);
  if (!str) {
    return []
  }
  return JSON.parse(str)
}

function setStore(key, obj) {
  let str
  if (typeof obj === 'object') {
    str = JSON.stringify(obj)
  }
  Taro.setStorageSync(key, str)
}


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    showQuestionModal: false, // 显示浮层
    questionList: getStore('questions')
  }

  addQuestion = () => {
    this.setState({
      showQuestionModal: true
    })
  }

  closeQuestion = () => {
    this.setState({
      showQuestionModal: false
    })
  }

  receiveQuestion =(question) => {
    let { questionList } = this.state
    questionList.push({id: parseInt(Math.random()* 10000), ...question})
    this.setState({
      questionList
    }, () => {
      setStore('questions', this.state.questionList)
    })
    this.closeQuestion()
  }

  vote = (item) => {
    let { questionList } = this.state
    if (item) {
      item.vote = item.vote ? (item.vote + 1) : 1;
    }

    let newList = questionList.map(itemQuestion => {
      if (itemQuestion.id == item.id) {
        itemQuestion = {...item}
      }
      return itemQuestion
    })

    this.setState({
      questionList: newList
    }, () => {
      setStore('questions', this.state.questionList)
    })
  }

  cutVote = (item) => {
    let { questionList } = this.state
    if (item) {
      item.vote = item.vote ? (item.vote - 1) : 0;
    }

    let newList = questionList.map(itemQuestion => {
      if (itemQuestion.id == item.id) {
        itemQuestion = {...item}
      }
      return itemQuestion
    })

    this.setState({
      questionList: newList
    }, () => {
      setStore('questions', this.state.questionList)
    })
  }

  render () {
    return (

      <View className='index'>
        <View className='title'>
          Taro 问答实例
        </View>
        <View className='question-list'>
          {
            this.state.questionList.map(item => (
              <View className='question' key={item.id}>
                <View class='question-left'>
                  <View className='question-title'>{item.title}</View>
                  <View className='question-desc'>{item.desc}</View>
                </View>
                <View className='question-right'>
                  <Image onClick={() => this.vote(item)} src={Yes} className='img' />
                  <Text>{item.vote ? item.vote : 0}</Text>
                  <Image onClick={() => this.cutVote(item)} src={No} className='img' />

                </View>
              </View>
            ))
          }
        </View>
        {this.state.showQuestionModal ? <AddQuestion onReceiveQuestion={this.receiveQuestion} onCloseQuestion={this.closeQuestion} /> : null}
        <Button className='btn-add-question' onClick={this.addQuestion}>提问</Button>
      </View>
    )
  }
}
