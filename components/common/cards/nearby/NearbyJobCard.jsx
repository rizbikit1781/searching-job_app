import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{ uri: checkImageURL(job.employer_logo)
          ? job.employer_logo : "https://img.freepik.com/premium-vector/find-job-logo-template-design_20029-959.jpg?w=2000"
          }}
          resizeMethod='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_employment_type}</Text>
      </View>
    
    </TouchableOpacity>
  )
}

export default NearbyJobCard;