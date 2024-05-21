import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { AimOutlined } from '@ant-design/icons';

function App() {
  const { TextArea } = Input;
  const [size, setSize] = useState('large');

  return (
    <div>
      <h1>DNA Analyzer</h1>
      <p>This is a website that uses NUPACK to analyze and design DNA.</p>
      <p>For more information about NUPACK, click <a href='https://docs.nupack.org/'>here</a></p>
      <h3>Barcode</h3>
      <Input placeholder="Barcode" />
      <br/>
      <br/>
      <h3>DNA Sequence</h3>
      <TextArea rows={4} placeholder="maxLength is 5000kb" maxLength={5000000} />
      <br/>
      <br/>
      <Button type="primary" shape="round" icon={<AimOutlined />} size={size}>
        Analyze
      </Button>
    </div>
  );
}

export default App;
