/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:17:46
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-30 23:29:26
 * @FilePath: \shop\src\components\LyTable\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { TabsProps } from 'element-plus'
import { FormType } from '@/types/form'
import LySearch, { getFormData } from '../LySearch'
import { ref } from 'vue'
import './index.scss'
type Props = {
  Column: TableType.ColumnType[]
  searchConfig?: {
    formConfig: FormType.FormConfig
  }
  slot?: {
    searchSlot: any
  }
  search?: Function
} & TabsProps
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
  const { Column = [], searchConfig } = props
  const handlePageChange = (type?: 'page' | 'size', v?: any) => {
    if (type === 'page' || type === 'size') {
      Object.assign(params.value, { [type]: v })
    }
    Object.assign(params.value, { ...getFormData() })
    props?.search && props?.search?.(params.value)
  }
  handlePageChange()
  return (
    <section>
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
      <el-table border stripe {...props}>
        {Column.map((item: any) => {
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
      <section class="tablePage">
        <el-pagination
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
