import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

import System_5020_fijo_y_corredizo from '../cruds/system/System_5020_fijo_y_corredizo';
import System_7038 from '../cruds/system/System_7038';
import System_8025 from '../cruds/system/System_8025';

const CreatePlan = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 1:
        return null;
      case 2:
        return <System_5020_fijo_y_corredizo />;
      case 3:
        return <System_7038 />;
      case 4:
        return <System_8025 />;
      default:
        return null;
    }
  };

  return (
    <View>
      <Text style={{ marginTop: 26 }}>Selecciona un sistema: </Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => handleOptionChange(itemValue)}
      >
        <Picker.Item label="Seleccionar" value={1} />
        <Picker.Item label="5020 fijo y corredizo" value={2} />
        <Picker.Item label="7038" value={3} />
        <Picker.Item label="8025" value={4} />
      </Picker>
      
      {renderSelectedComponent()}
    </View>
  );
};

export default CreatePlan; 
