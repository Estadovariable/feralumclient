import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

import Ox_con_775 from '../subsystem/7038/ox_con_775';
import Ox from '../subsystem/7038/ox';
import Oxxo_con_701 from '../subsystem/7038/oxxo_con_701';
import Oxxxxo from '../subsystem/7038/oxxxxo';
import Xoo from '../subsystem/7038/xoo';
import Xx from '../subsystem/7038/xx';
import Xxo_3_rieles from '../subsystem/7038/xxo_3_rieles';
import Xxx_3_rieles from '../subsystem/7038/xxx_3_rieles';
import Xxxo from '../subsystem/7038/xxxo';
import Xxxx from '../subsystem/7038/xxxx';


const System_7038 = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
        case 1:
            return null;
        case 2:
            return <Ox_con_775 />;
        case 3:
            return <Ox />;
        case 4:
            return <Oxxo_con_701 />;
        case 5:
            return <Oxxxxo />;
        case 6:
            return <Xoo />;
        case 7:
            return <Xx />;
        case 8:
            return <Xxo_3_rieles />;
        case 9:
            return <Xxx_3_rieles />;
        case 10:
            return <Xxxo />;
        case 11:
            return <Xxxx />;
      default:
        return null;
    }
  };

  return (
    <View>
      <Text>Selecciona un sistema: </Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => handleOptionChange(itemValue)}
      >
        <Picker.Item label="Seleccionar" value={1} />
        <Picker.Item label="Ox con 775" value={2} />
        <Picker.Item label="Ox" value={3} />
        <Picker.Item label="Oxxo_con_701" value={4} />
        <Picker.Item label="Oxxxxo" value={5} />
        <Picker.Item label="Xoo" value={6} />
        <Picker.Item label="Xx" value={7} />
        <Picker.Item label="Xxo_3_rieles" value={8} />
        <Picker.Item label="Xxx_3_rieles" value={9} />
        <Picker.Item label="Xxxo" value={10} />
        <Picker.Item label="Xxxx" value={11} />
      </Picker>
      
      <ScrollView>
      {renderSelectedComponent()}
      </ScrollView>
    </View>
  );
};

export default System_7038; 
