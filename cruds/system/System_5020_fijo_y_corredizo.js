import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

import Oxxo from '../subsystem/5020/oxxo';
import Xo_con_chapa from '../subsystem/5020/xo_con_chapa';
import Xo_liviana_cerradura_cierre from '../subsystem/5020/xo_liviana_cerradura_cierre';
import Xo_liviana_cierre from '../subsystem/5020/xo_liviana_cierre';
import Xoox from '../subsystem/5020/xoox';
import Xox from '../subsystem/5020/xox';
import Xx_con_cierre_y_chapa from '../subsystem/5020/xx_con_cierre_y_chapa';

const System_5020_fijo_y_corredizo = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
        case 1:
            return null;
        case 2:
            return <Oxxo/>;
        case 3:
            return <Xo_con_chapa />;
        case 4:
            return <Xo_liviana_cerradura_cierre />;
        case 5:
            return <Xo_liviana_cierre />;
        case 6:
            return <Xoox />;
        case 7:
            return <Xox />;
        case 8:
            return <Xx_con_cierre_y_chapa />;
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
        <Picker.Item label="Oxxo" value={2} />
        <Picker.Item label="Xo_con_chapa" value={3} />
        <Picker.Item label="Xo_liviana_cerradura_cierre." value={4} />
        <Picker.Item label="Xo_liviana_cierre" value={5} />
        <Picker.Item label="Xoox" value={6} />
        <Picker.Item label="Xox" value={7} />
        <Picker.Item label="Xx_con_cierre_y_chapa" value={8} />
      </Picker>
      <ScrollView>
      {renderSelectedComponent()}
      </ScrollView>
    </View>
  );
};

export default System_5020_fijo_y_corredizo; 
