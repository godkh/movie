import React, { useState, useCallback } from 'react';
import { Text, View, Button, ImageBackground} from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Home = ({navigation}) => {

  // local state
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    setKeyword(search);
  }, []);

  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require("../image/16135446206190.jpg")} style={{ width: "100%", height: "100%" }}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="Search"
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>
      </ImageBackground>
    </View>
  )
}

export default Home;