/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Datepicker,
  Icon,
  Input,
  Layout,
  MenuItem,
  OverflowMenu,
  Select,
  SelectItem,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const Width = Dimensions.get('screen').width;

const data = ['Tuần', 'Tháng', 'Năm'];
const data1 = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  fillShadowGradientOpacity: 1,
  fillShadowGradient: 'black',
  fromZero: 0,
  useShadowColorFromDataset: false, // optional
};

export default function index() {
  const styles = useStyleSheet({
    container: {flex: 1},
    form: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      paddingHorizontal: 10,
    },
    form_input: {
      width: Width * 0.5 - 10,
      paddingHorizontal: 10,
    },
    button: {
      paddingHorizontal: 10,
      marginHorizontal: 10,
    },
    layout_button: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    layout_revenue: {
      width: Width * 0.4,
      borderWidth: 1,
      borderColor: '#78C9FF',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
    },
    text_title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
    layout_chart: {
      marginTop: 10,
    },
    chart: {
      marginVertical: 10,
    },
  });

  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [date, setDate] = React.useState(new Date());

  const CalendarIcon = (props) => <Icon {...props} name="calendar" />;

  const renderOption = (title) => <SelectItem title={title} />;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.form}>
        <Layout style={styles.form_input}>
          <Text style={styles.text}>Loại biểu đồ:</Text>
          <Select
            placeholder="Default"
            status="info"
            value={data[selectedIndex - 1]}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}>
            {data.map(renderOption)}
          </Select>
        </Layout>
        <Layout style={styles.form_input}>
          <Text style={styles.text}>Ngày bắt đầu:</Text>
          <Datepicker
            placeholder="Pick Date"
            status="info"
            date={date}
            onSelect={(nextDate) => setDate(nextDate)}
            accessoryRight={CalendarIcon}
          />
        </Layout>
      </Layout>
      <Layout style={styles.layout_button}>
        <Button
          style={styles.button}
          appearance="outline"
          status="primary"
          size="small">
          Xem biểu đồ
        </Button>
        <Button
          style={styles.button}
          appearance="outline"
          status="danger"
          size="small">
          Xuất báo cáo
        </Button>
      </Layout>
      <Layout>
        <Text style={styles.text_title}>Thông tin tổng quan trong tuần</Text>
        <Layout style={styles.form}>
          <Layout style={styles.layout_revenue}>
            <Text style={styles.bold}>Tổng doanh thu</Text>
            <Text style={styles.bold}>---</Text>
            <Text>5.000.000 đ</Text>
          </Layout>
          <Layout style={styles.layout_revenue}>
            <Text style={styles.bold}>Doanh thu trung bình</Text>
            <Text style={styles.bold}>---</Text>
            <Text>5.000.000 đ</Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout style={styles.layout_chart}>
        <Text style={styles.text_title}>Biểu đồ doanh thu theo tuần</Text>
        <BarChart
          style={styles.chart}
          data={data1}
          width={Width}
          height={250}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          showValuesOnTopOfBars
          fromZero
        />
      </Layout>
    </Layout>
  );
}
