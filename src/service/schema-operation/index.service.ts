/*
 * @file schema 操作服务范例，我们需要实现 SchemaOperator 规定的四个接口
 */
import { v4 as uuid } from 'uuid';
import SchemaOperator from '@/interface/SchemaOperator';
import SchemaOperationPayload from '@/interface/schema-operation-payload';
import StyleValueUnit from '@/enum/style-value-unit';
import DynamicObject from '@/interface/dynamic-object';

class SchemaService implements SchemaOperator {
  static widgetGenerationDict: DynamicObject = {
    'container-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '容器',
        desc: '容器',
        props: {
          style: {
            minHeight: {
              name: 'min-height',
              value: 40,
              unit: StyleValueUnit.px
            },
            boxSizing: {
              name: 'box-sizing',
              value: 'border-box',
              unit: StyleValueUnit.none
            }
          }
        },
        children: []
      };
    },
    'text-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '文本',
        desc: '文本',
        props: {
          data: '文本控件',
          style: {
            width: {
              name: 'width',
              value: 'auto',
              unit: StyleValueUnit.none
            },
            height: {
              name: 'height',
              value: 20,
              unit: StyleValueUnit.px
            },
            fontWeight: {
              name: 'font-weight',
              value: 600,
              unit: StyleValueUnit.none
            },
            lineHeight: {
              name: 'line-height',
              value: 20,
              unit: StyleValueUnit.px
            },
            color: {
              name: 'color',
              value: '#000',
              unit: StyleValueUnit.none
            }
          }
        }
      };
    },
    'image-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '图片',
        desc: '图片',
        props: {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2118613132,1080069599&fm=26&gp=0.jpg',
          alt: '请配置图片',
          style: {
            width: {
              name: 'width',
              value: 100,
              unit: StyleValueUnit.px
            },
            height: {
              name: 'height',
              value: 100,
              unit: StyleValueUnit.px
            }
          }
        }
      };
    },
    'list-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '列表',
        desc: '列表',
        props: {
          data: {
            type: Array,
            value: []
          },
          style: {
            minHeight: {
              name: 'min-height',
              value: 40,
              unit: StyleValueUnit.px
            }
          }
        },
        children: []
      };
    },
    'input-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '输入框',
        desc: '输入框',
        props: {
          data: {
            type: String || Number,
            value: ''
          },
          style: {}
        }
      };
    }
  };

  insertWidget(data: { type: string }): any {
    if (SchemaService.widgetGenerationDict[data.type]) {
      return SchemaService.widgetGenerationDict[data.type](data);
    }
    console.error(`${data.type} not found`);
  }

  deleteWidget(payload: SchemaOperationPayload): any {}

  moveWidget(payload: SchemaOperationPayload): any {}

  updateWidget(payload: SchemaOperationPayload): any {}
}

export default new SchemaService();
