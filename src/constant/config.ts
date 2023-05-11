/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-02-08 21:48:25
 * @Description: 内容配置
 */

//位置
export const configMune=[setObj('公告','notice'),setObj("轮播图",'banner'),setObj('类目推荐','category'),setObj('热门类目','hotCategory'),setObj("商品推荐","product"),setObj("活动浮窗",'activity')]


//状态
export const statusMap=[setObj('全部',''),setObj('启用','0'),setObj('禁用','1')]

function setObj(label:any,value?:any){
    return {
        label,
        value
    }
}