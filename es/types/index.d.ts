import { InitDateType } from './RichTableTypes';
/**
 * 实例属性
 */
export interface RichTableInstance {
  getFiledValues: () => any;
}

/**
 * props
 */
export interface RichTablePropsType {
  defaultValue: InitDateType;
  table?: RichTableInstance;
}
