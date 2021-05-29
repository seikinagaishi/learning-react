import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

interface obra {
    id: number,
    nome: string,
    foto_url: string,
}


const Home = () => {
    const [obras, setObras] = useState<obra[]>([]);

    useEffect(() => {
        api.get('lista').then(response => {
            setObras(response.data);
        })
    }, [])

    const navigation = useNavigation();

    function handleNavigationToItem(param: number) {
        navigation.navigate('item', { id: param });
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>

                <Text style={styles.title}>Lista de Obras</Text>
                
                { obras.map(obra => (
                    <TouchableOpacity key={obra.id} style={styles.obra} onPress={() => handleNavigationToItem(obra.id)}>
                        <Image
                            source={ {uri: obra.foto_url} } 
                            resizeMode="cover"
                            style={styles.obraPic}
                        />

                        <View style={styles.obraTitleArea}>
                            <Text style={styles.obraTitle}>{obra.nome}</Text>
                        </View>
                    </TouchableOpacity>
                )) }
                

            </View>
        </View>
        
    )
}

export default Home;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        opacity: 90,
    },
    container: {
        flex: 1,
        width: 260,
        marginVertical: 30,
    },

    title: {
        fontWeight: '700',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#306272'
    },

    obra: {
        flex: 1,
        marginTop: 30,
        maxWidth: 260,
        maxHeight: 150,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
    },

    obraPic: {
        width: '100%',
        height: '100%',
    },

    obraTitleArea: {
        width: '100%',
        height: 40,
        bottom: 0,
        backgroundColor: '#63838D',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },

    obraTitle: {
        fontWeight: '700',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#fff',
    },
})