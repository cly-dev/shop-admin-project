/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-06 14:53:13
 * @Description: 
 */
import {FormType} from "@/types/form";
import type {TableProps} from "element-plus";
declare namespace LayoutTypeMap{
    type searchConfig=FormType.SearchConfig;
    type tableConfig={
        Colomn:TableType.ColumnType[]
        page?:number,
        size?:number
    } & TableProps;
    type modalConfig={
        formConfig:FormType.FormConfig
    }
    interface LayoutProps{
        searchConfig:FormType.SearchConfigg,
        tableConfig:tableConfig,
        modalConfig:any,
        search:function,
        update:function,
        delete:function,
        insert:function
    }
}