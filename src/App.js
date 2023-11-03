import React, { useState } from 'react';
import {AZURE_COGNITIVE_SERVICES_KEY, AZURE_COGNITIVE_SERVICES_ENDPOINT} from 'process.env';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const analyzeImage = async () => {
    const subscriptionKey = AZURE_COGNITIVE_SERVICES_KEY;
    const endpoint = AZURE_COGNITIVE_SERVICES_ENDPOINT;
    const uriBase = `${endpoint}/computervision/imageanalysis:analyze&api-version=2023-02-01-preview`;

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey,
      },
      body: JSON.stringify({ url: inputValue }),
    };

    const response = await fetch(uriBase, params);
    const data = await response.json();
    setResult(data);
  };

  const DisplayResults = () => {
    if (result) {
      return (
        <div>
          <h2>Results:</h2>
          <p>Image URL: {inputValue}</p>
          <p>Image format: {result.metadata.format}</p>
          <p>Image width: {result.metadata.width}</p>
          <p>Image height: {result.metadata.height}</p>
          <p>Image description: {result.description.captions[0].text}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Computer vision</h1>
      <form>
        <p>
          <label htmlFor="prompt">Insert URI, or type prompt:</label>
        </p>
        <input
          type="text"
          name="prompt"
          placeholder="Enter URL or textual prompt to generate an image"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          <button type="button" onClick={analyzeImage}>
            Analice
          </button>
          <button type="button">Generate</button>
        </div>
      </form>
      <DisplayResults />
    </div>
  );
}

export default App;
