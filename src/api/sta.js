import request from '@/utils/request'
//从url将数据发送请求，后端收到url后处理数据，返回结果

export default {
    //1，查询某一天注册人数，生成统计数据
    createStaData(day) {
        return request({
            url: `/staservice/sta/registerCount/${day}`,
            method: 'post'
          })
    },

    //2，图标显示，获取两部分数据，日期json格式，以及数量json格式
    getDataSta(searchObj){
        return request({
            url: `/staservice/sta/getShowData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method:'get'
          })
    }
}
