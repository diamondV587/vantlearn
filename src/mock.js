const Mock = require('mockjs')

const Random = Mock.Random

const productNewsData = function() {
  let newsList = [];
  for(let i = 0;i <20 ;i++) {
    let obj = {
      title:Random.ctitle(),
      content:Random.cparagraph(),
      createdTime:Random.date
    }
    newsList.push(obj)
  }
}

Mock.mock('/mock/news',productNewsData)