import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  filter: {
    flexDirection: 'row',
    left: 0,
    bottom: -20,
    width: '100%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ee6b26'
  },
  filterTextInative: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#20295f',
    opacity: 0.5
  },
  scrollView: {
    width: '100%',
    marginTop: 20

  },
  title: {
    top: 10,
    width: '100%',
    borderBottomWidth: 1,
    alignItems: 'center'
  }, titleText: {
    color: '#20295f',
    fontSize: 18,
    top: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  
  }

});

export default styles;