import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
	})

	if(!fontsLoaded) {
		return <AppLoading/>
	} else {
		return (
			<>
				<StatusBar backgroundColor="transparent" translucent />
				<Routes/>
			</>
		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
