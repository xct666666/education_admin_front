import request from '@/utils/request'
//从url将数据发送请求，后端收到url后处理数据，返回结果

export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/addCourserInfo`,
            method: 'post',
            //因为后端使用json格式接收数据，所以我们需要将参数改为json格式
            data:courseInfo
          })
    },

    //2，查询所有讲师
    getListTeacher(){
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
          })
    },

    //3，根据课程id查询课程基本信息
    getCourseInfoId(id){
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
          })
    },

    //4,修改课程信息
    updateCourseInfo(courseInfo){
        return request({
        url: `/eduservice/course/updateCourseInfo`,
        method: 'post',
        data:courseInfo
        })
    },

    //5，课程确认信息显示
    getPublishCourseInfo(id){
        return request({
        url: `/eduservice/course/getPublishCourseInfo/${id}`,
        method: 'get'
        })
    },

    //6，课程最终发布
    publishCourse(id){
        return request({
        url: `/eduservice/course/publishCourse/${id}`,
        method: 'post'
        })
    },

    //7，查询所有课程
    getCourseList(){
        return request({
        url: `/eduservice/course`,
        method: 'get'
        })
    },

    //8，条件查询方法
    pageCourseList(current,limit,courseQuery){
        return request({
            url: `/eduservice/course/pageCourseCondition/${current}/${limit}`,
            method: 'post',
            data:courseQuery
            })
    },

    //9，删除课程方法
    removeCourse(courseId){
        return request({
            url: `/eduservice/course/deleteCourse/${courseId}`,
            method: 'delete'
            })
    }
}
