/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:17:46
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  {ElTable} from 'element-plus'
import { FormType } from '@/types/form'
import LySearch from '../LySearch'
import { ref } from 'vue'
import './index.scss'
type Props = {
  column: TableType.ColumnType[]
  searchConfig?: {
    formConfig: FormType.FormConfig
  }
  slot?: {
    searchSlot: any
  }
  search?: Function
  showSearch?:boolean
  showPage?:boolean
  tableConfig?:{[key in keyof typeof ElTable]?: (typeof ElTable)[key]}
  //操作
  action?:{
    options:['watch','edit','delete','link'],
    handler:{
      watch?:Function,
      edit?:Function,
      delete?:Function,
      link?:Function
    }
    custom:any
  }
} 
const initConfig = {
  options: {},
  config: {
    items: [],
    rules: [],
  },
}
const params = ref<any>({
  page: 1,
  size: 10,
})

const LyTable = (props: Props, { slots }: any) => {
  const { column = [], searchConfig,tableConfig,action} = props;
  const handlePageChange = (type?: 'page' | 'size', v?: any) => {
    if (type === 'page' || type === 'size') {
      Object.assign(params.value, { [type]: v })
    }else{
      Object.assign(params.value, type)
    }
    props?.search && props?.search?.(params.value)
  }
  handlePageChange()
  return (
    <section>
      {
        props.showSearch &&  
        <section class="tableSearch">
        <LySearch
          search={handlePageChange}
          formConfig={searchConfig ? searchConfig.formConfig : initConfig}
        >
          {{
            default: slots?.searchSlot,
          }}
        </LySearch>
      </section>
      }
     
      <el-table  border  stripe {...tableConfig} {...props} >
        {column.map((item: any) => {
          return (
            <>
              {item?.template ? (
                <el-table-column key={item.label} {...item}>
                  {{
                    default: (scope: any) => {
                      const _props = { ...scope, ...item }
                      return <item.template {..._props}></item.template>
                    },
                  }}
                </el-table-column>
              ) : (
                <el-table-column key={item.label} {...item} />
              )}
            </>
          )
        })}
      </el-table>
      <section class="tablePage" >
        <el-pagination
          v-show={props.showPage}
          hide-on-single-page
          background
          layout="sizes,prev, pager, next,  total"
          total={1000}
          onSizeChange={(v: number) => handlePageChange('size', v)}
          onCurrentChange={(v: number) => handlePageChange('page', v)}
        />
      </section>
    </section>
  )
}
export default LyTable
