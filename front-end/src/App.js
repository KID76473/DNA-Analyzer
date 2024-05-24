import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { AimOutlined, DownloadOutlined } from '@ant-design/icons';
import './App.css'

function App() {
  const { TextArea } = Input;
  const [size, setSize] = useState('large');
  const [finished, setFinished] = useState(true);

  const handleDownload = () => {
    console.log("Called")
    setFinished(true);
  }

  return (
    <div id='container'>
      <h1>DNA Analyzer</h1>
      <p>This is a website that uses NUPACK to analyze and design DNA.</p>
      <p>For more information about NUPACK, click <a href='https://docs.nupack.org/'>here</a></p>
      <h3>DNA Sequence</h3>
      <TextArea rows={4} placeholder="maxLength is 5000kb" maxLength={5000000} />
      <br/>
      <br/>
      <h3>Oligo length</h3>
      <Input placeholder="Oigo length" />
      <br/>
      <br/>
      <h3>Barcode length</h3>
      <Input placeholder="Barcode length" />
      <br/>
      <br/>
      <h3>Toehold length</h3>
      <Input placeholder="Toehold length" />
      <br/>
      <br/>
      <h3>max a defect</h3>
      <Input placeholder="max a defect" />
      <br/>
      <br/>
      <h3>Bottom max</h3>
      <Input placeholder="Bottom max" />
      <br/>
      <br/>
      <Button type="primary" shape="round" icon={<AimOutlined />} size={size}>Analyze</Button>
      <div>
        {finished && (
          <>
            <p>Click button below to download result!</p>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
          </>
        )}
      </div>
      <footer>
        <p>Created by: Noah Robinson, James Huang</p>
        <p>Email: nerobins@caltech.edu, kid76473@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
