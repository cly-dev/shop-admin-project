/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-18 23:22:29
 * @Description: 
 */
const a={
    name:'name',
    age:'age'
}
interface b{
    date:string,
    t:string
}


export type T={
    [key in keyof typeof a]?:(typeof a)[key] //遍历对象属性，并且获取每一个属性的类型，并且将每个属性都赋给自己
}
const c:T={
    
}
