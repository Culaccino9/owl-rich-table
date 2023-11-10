# owl-rich-table

## Install

Using npm:

```bash
$ npm install --save owl-rich-table
```

or using yarn:

```bash
$ yarn add owl-rich-table
```

食用
```javascript
const mock = [
  [{ value: '1_1' }, { value: '1_2' }, { value: '1_3' }, { value: '1_4' }],
  [{ value: '2_1' }, { value: '2_2' }, { value: '2_3' }, { value: '2_4' }],
  [{ value: '3_1' }, { value: '3_2' }, { value: '3_3' }, { value: '3_4' }],
];

export default function App() {
  const [table] = RichTable.useRichTable();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log('tableValue:', table.getFiledValues());
        }}
      >
        点击查看value值
      </button>
      <RichTable table={table} defaultValue={mock} />
    </>
  );
}
```

## demo
### 基础功能
curd + 宽度拉伸 + 高度自适应

![curd](https://github.com/Culaccino9/owl-rich-table/blob/master/assets/curd.gif)


### redo、undo
![redo_undo](https://github.com/Culaccino9/owl-rich-table/blob/master/assets/redo_undo.gif)


### excel单向复制
![cv](https://github.com/Culaccino9/owl-rich-table/blob/master/assets/cv.gif?raw=true)


## 未来版本1.1

- 多选表格
- 合并单元格
- 双向复制

## 未来版本 +

- 自定义输入框
- 自定义单元格校验
- …
