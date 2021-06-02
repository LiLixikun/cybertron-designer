export interface IComponentData {
    /** uuid v4 生成 */
    id: string;
    /** 和mock里面的类型对应 也就是 React.createElement<tag> */
    type: string;
    /** 组件名 */
    name?: string;
    /** 组件属性 详情见 defaultProps */
    props: {
        [key: string]: any
    }
}