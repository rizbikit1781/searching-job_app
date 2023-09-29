import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils';


const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>

        <View style={styles.logoBox}>

          <Image 
            source={{
              uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fjob-logo&psig=AOvVaw2H6tXcTgsTL4B7DlNugEDE&ust=1695699203453000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOicsPbpxIEDFQAAAAAdAAAAABAV"
            }}
            style={styles.logoImage}
          />

        </View>

        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>

        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} / </Text>
          <View style={styles.locationBox}>
            <Image 
              source={icons.location}
              resizeMethod="contain"
              style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>

    </View>
  );
}

export default Company;