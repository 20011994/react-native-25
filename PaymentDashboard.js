import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Card, Title, Paragraph, } from 'react-native-paper';
import { BarChart,LineChart,PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const screenWidth = Dimensions.get('window').width;
const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [120, 150, 170, 90, 200, 250],
      strokeWidth: 2,
    },
  ],
};
const statusData = [
  { name: 'Success', count: 60, color: '#4CAF50', legendFontColor: '#333', legendFontSize: 14 },
  { name: 'Pending', count: 25, color: '#FFC107', legendFontColor: '#333', legendFontSize: 14 },
  { name: 'Failed', count: 15, color: '#F44336', legendFontColor: '#333', legendFontSize: 14 },
];

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: () => '#000',
  style: { borderRadius: 16 },
};
const PaymentDashboard = () => {
    
  return (
      <View style={styles.container}>
          <ScrollView>
          <Text style={styles.title}>Payment Dashboard</Text>
          <Card>
  <Card.Content>
    <Title>Payment Process</Title>
    <Paragraph>(Payment Charts)</Paragraph>
  </Card.Content>
          </Card>
          {/* <Text style={styles.sectionTitle}>Weekly Sales</Text> */}
<BarChart
  data={chartData}
  width={screenWidth - 32} // full width minus padding
  height={220}
  chartConfig={chartConfig}
  bezier
  style={{
    borderRadius: 16,
    marginBottom: 24,
  }}
          />
          <LineChart
  data={chartData}
  width={screenWidth - 32} // full width minus padding
  height={220}
  chartConfig={chartConfig}
  bezier
  style={{
    borderRadius: 16,
    marginBottom: 24,
  }}
/>
<PieChart
  data={statusData}
  width={screenWidth - 32}
  height={220}
  chartConfig={{
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  }}
  accessor="count"
  backgroundColor="transparent"
  paddingLeft="16"
  absolute
              />
              </ScrollView>

    </View>
  );
};

export default PaymentDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
        backgroundColor: '#fff',
     paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    },
   card: {
    width: wp('45%'),
    marginBottom: hp('2%'),
    backgroundColor: '#fff',
  },
  
});
