/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:17:46
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-21 22:22:42
 * @FilePath: \shop\src\components\LyTable\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { TabsProps } from 'element-plus'
type Props = {
  Column: TableType.ColumnType[]
} & TabsProps

const LyTable = (props: Props) => {
  const { Column = [] } = props
  return (
    <section>
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
    </section>
  )
}
export default LyTable
