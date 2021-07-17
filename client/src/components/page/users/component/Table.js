/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Button } from 'antd';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [selectedRowKeys,setSelectedRowKeys] = useState([]);
  
  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys({ selectedRowKeys });
  };

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: '5%',
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      width: '5%',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              // eslint-disable-next-line no-script-url
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <EditOutlined />
          </Typography.Link>
        );
      },
    },
    {
        title: 'Delete',
        dataIndex: 'operation',
        width: '1%',
        render: () => {
          return <Button><DeleteOutlined /></Button>
        },
      },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
    const {selectedRowKeysChoose} = selectedRowKeys;
    const rowSelection = {
        selectedRowKeysChoose,
        columnWidth:"3%",
      onChange: onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
      ],
    };
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        rowSelection={rowSelection}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;