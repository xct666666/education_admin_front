import request from '@/utils/request'
//从url将数据发送请求，后端收到url后处理数据，返回结果

export default {
    //1 课程分类列表
    getSubjectList() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get',
          })
    }
}
