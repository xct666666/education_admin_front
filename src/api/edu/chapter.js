import request from '@/utils/request'
//从url将数据发送请求，后端收到url后处理数据，返回结果

export default {
    //1 根据课程id获取章节和小节数据列表
    getAllChapterVideo(courseId) {
        return request({
            url: `/eduservice/chapter/addChapterVideo/${courseId}`,
            method: 'get'
          })
    },

    //2，添加章节
    addChapter(chapter) {
        return request({
            url: `/eduservice/chapter/addChapter`,
            method: 'post',
            data:chapter
          })
    },

    //3，根据id查询章节
    getChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/getChapterInfo/${chapterId}`,
            method: 'get'
        })
    },

    //4，修改章节
    updateChapter(chapter) {
        return request({
            url: `/eduservice/chapter/updateChapter`,
            method: 'post',
            data:chapter
        })
    },

    //5，删除章节
    deleteChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/${chapterId}`,
            method: 'delete'
        })
    },

    //6，添加小节
    addVideo(video) {
        return request({
            url: `/eduservice/video/addVideo`,
            method: 'get',
            data:video
          })
    },

    //7，根据id查询章节
    getVideo(videoId) {
        return request({
            url: `/eduservice/video/getVideoInfo/${videoId}`,
            method: 'post'
        })
    },

    //8，删除小节
    deleteVideo(videoId) {
        return request({
            url: `/eduservice/video/${videoId}`,
            method: 'delete'
        })
    },

    //9，修改小节
    updateVideo(video) {
        return request({
            url: `/eduservice/video/updateVideo`,
            method: 'post',
            data:video
        })
    }
}