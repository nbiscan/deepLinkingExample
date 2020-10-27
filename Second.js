import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, FlatList} from 'react-native';

class Second extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };

  async componentDidMount() {
    const {navigation} = this.props;

    // try calling demo://home/second/10 in simulator's browser

    if (navigation.state.params?.secondId)
      this.flatListRef.scrollToIndex({
        animated: true,
        index: navigation.state.params.secondId,
      });
  }

  render() {
    const {navigation} = this.props;

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.title}>Second level</Text>
          {navigation.state.params && (
            <Text style={[styles.subtitle, styles.params]}>
              Param passed in DL: {navigation.state.params.secondId}
            </Text>
          )}
          <FlatList
            data={Array.from({length: 30}, (_, k) => k + 1)}
            ref={ref => {
              this.flatListRef = ref;
            }}
            keyExtractor={item => item.id}
            renderItem={(data, i) => (
              <View key={i}>
                <Text style={styles.subtitle}>
                  Numbered item no {data.item}
                </Text>
              </View>
            )}
            onScrollToIndexFailed={error => {
              this.flatListRef.scrollToOffset({
                offset: error.averageItemLength * error.index,
                animated: true,
              });
              setTimeout(() => {
                if (this.flatListRef !== null) {
                  this.flatListRef.scrollToIndex({
                    index: error.index,
                    animated: true,
                  });
                }
              }, 100);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#0f293b',
    height: '100%',
    padding: 30,
  },
  title: {
    marginTop: 50,
    fontFamily: 'Verdana',
    fontSize: 40,
    color: 'white',
  },
  subtitle: {
    marginTop: 10,
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'white',
  },
  params: {
    marginBottom: 20,
  },
});

export default Second;
