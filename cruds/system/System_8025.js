import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

import Ox_desiguales from '../subsystem/8025/ox_Desiguales';
import Ox from '../subsystem/8025/ox';
import Oxo_desiguales from '../subsystem/8025/oxo_desiguales';
import Oxx_fijo_parche_2_rieles from '../subsystem/8025/oxx_fijo_parche_2_rieles';
import Oxxo from '../subsystem/8025/Oxxo';
import Oxxxo_con_divisor from '../subsystem/8025/oxxxo_con_divisor';
import Oxxxxo from '../subsystem/8025/oxxxxo';
import Xoo from '../subsystem/8025/xoo';
import Xox from '../subsystem/8025/xox';
import Xx from '../subsystem/8025/xx';
import Xxx from '../subsystem/8025/xxx';
import Xxxo_de_parche from '../subsystem/8025/xxxo_de_parche';


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
            return <Ox_desiguales />;
        case 3:
            return <Ox />;
        case 4:
            return <Oxo_desiguales />;
        case 5:
            return <Oxx_fijo_parche_2_rieles />;
        case 6:
            return <Oxxo />;
        case 7:
            return <Oxxxo_con_divisor />;
        case 8:
            return <Oxxxxo />;
        case 9:
            return <Xoo />;
        case 10:
            return <Xox />;
        case 11:
            return <Xx />;
        case 12:
            return <Xxx />;
        case 13:
            return <Xxxo_de_parche />;
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
        <Picker.Item label="Ox_desiguales" value={2} />
        <Picker.Item label="Ox" value={3} />
        <Picker.Item label="Oxo_desiguales" value={4} />
        <Picker.Item label="Oxx_fijo_parche_2_rieles" value={5} />
        <Picker.Item label="Oxxo" value={6} />
        <Picker.Item label="Oxxxo_con_divisor" value={7} />
        <Picker.Item label="Oxxxxo" value={8} />
        <Picker.Item label="Xoo" value={9} />
        <Picker.Item label="Xox" value={10} />
        <Picker.Item label="Xx" value={11} />
        <Picker.Item label="Xxx" value={12} />
        <Picker.Item label="Xxxo_de_parche" value={12} />
      </Picker>
      
      <ScrollView>
      {renderSelectedComponent()}
      </ScrollView>
    </View>
  );
};

export default System_7038; 
