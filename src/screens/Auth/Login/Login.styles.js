import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  logo: {
    margin: 30,
    alignSelf: 'center',
    marginBottom: 50
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
  emailTxt: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10
  },
  inputTxt: {
    fontSize: 18,
    borderBottomWidth: 0.7,
    paddingVertical: 5,
    width: '100%'
  },
  alertTxt: {
    color: 'red'
  },
  eyeStyle: {
    left: -30,
  },
  btnContainer: {
    width: '100%',
    backgroundColor: '#ff7043',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  btnTxt: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  rowLine: {
    width: '45%',
    height: 1,
    backgroundColor: '#000',
    opacity: 0.5,
  },
  registerTxt: {
    color: '#2a79ff',
    textAlign: 'center',
    fontWeight: "700",
    fontSize: 14
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
