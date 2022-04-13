import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Headline} from 'react-native-paper';

import {IDate, DAY_OF_WEEK, MONTHS} from '@myapp/models/date.model';

const dateBuilder = () => {
  let d = new Date();

  return {
    hours: d.getHours() > 12 ? d.getHours() - 12 : d.getHours(),
    minutes:
      d.getMinutes() < 10 ? '0' + String(d.getMinutes()) : d.getMinutes(),
    seconds:
      d.getSeconds() < 10 ? '0' + String(d.getSeconds()) : d.getSeconds(),
    unit: d.getHours() > 12 ? 'pm' : 'am',
    day: DAY_OF_WEEK[d.getDay()],
    date: d.getDate(),
    month: MONTHS[d.getMonth()],
    year: d.getFullYear(),
  };
};

const HomeScreen: React.FC = () => {
  const [timer, setTimer] = React.useState<IDate>();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(dateBuilder());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <View style={styles.container}>
      {timer ? (
        <>
          <Headline>
            {timer?.hours} : {timer?.minutes} : {timer?.seconds} {timer?.unit}
          </Headline>

          <Headline>
            {timer?.day}, {timer?.month} {timer?.date}, {timer?.year}
          </Headline>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
