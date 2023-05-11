/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-02-12 21:42:10
 * @Description:  用户类型
 */
declare namespace UserType{
    type UserField={
        //用户ID
        adminId:string,
        //phone
        phone?:string,
        //密码
        password?:string
        //头像
        avater?:string
        //邮箱
        email?:string
        //状态
        status?:'0' | '1'
        //权限
        power?:'0' | '1',
        //注册时间
        joinTime?:number
        //用户昵称
        userName?:string
        //用户token
        token:string
    }
    type LoginParmas=Required<Record<'adminId' | 'code' | 'checkoutCode' | 'password',string>>
}