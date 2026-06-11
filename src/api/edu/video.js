import request from '@/utils/request'
//从url将数据发送请求，后端收到url后处理数据，返回结果

export default {

    //1，添加小节
    addVideo(video) {
        return request({
            url: `/eduservice/video/addVideo`,
            method: 'post',
            data:video
          })
    },

    //2，根据id查询章节
    getVideo(videoId) {
        return request({
            url: `/eduservice/video/getVideoInfo/${videoId}`,
            method: 'post'
        })
    },

    //3，删除小节
    deleteVideo(videoId) {
        return request({
            url: `/eduservice/video/${videoId}`,
            method: 'delete'
        })
    },

    //4，修改小节
    updateVideo(video) {
        return request({
            url: `/eduservice/video/updateVideo`,
            method: 'post',
            data:video
        })
    },

    //5，删除视频
    deleteAliyunvod(id) {
        return request({
            url: `/eduVod/video/removeAlyVideo/${id}`,
            method: 'delete'
        })
    },
}