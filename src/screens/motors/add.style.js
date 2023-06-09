import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    marginBottom: 25
  },
  mainView: {
    paddingRight: 25,
    paddingBottom: 20,
    paddingLeft: 25,
    height: '100%'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  scrollContainer: {
    marginBottom: 100,
    paddingBottom: 100
  },
  formContainer: {
    flex: 1,
    gap: 15,
    paddingBottom: 100
  },
  addButton: {
    margin: 20,
    padding: 10,
    backgroundColor: '#E57C23',
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButtonText: {
    textAlign: 'center',
    color: '#fff'
  },
  imageView: {
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  changeImageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#E57C23',
    borderRadius: 10,
  },
  changeImageText: {
    textAlign: 'center',
    color: '#fff'
  },
})