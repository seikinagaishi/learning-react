import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

interface Obra {
    id: number,
    nome: string,
    autor: string,
    ano: number,
    capitulos: number,
    foto_url: string,
}

interface Params {
    id: number
}

const Item = () => {
    const route = useRoute();
    const routeParams = route.params as Params;

    const [obra, setObra] = useState<Obra>();

    useEffect(() => {
        api.get('lista', {params: {id: routeParams.id}}).then(response => {
            setObra(response.data[0]);
        })
    }, [])

    const navigation = useNavigation();

    function handleNavigationToHome() {
        navigation.navigate('home');
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>

                {obra &&
                    <View>
                        <Image 
                            source={ {uri: obra.foto_url} } 
                            resizeMode="cover"
                            style={styles.picture}
                        />

                        <Text style={styles.title}>{obra.nome}</Text>
                        <Text style={styles.description}>Obra criada por {obra.autor}</Text>

                        <Text style={styles.subtitle}>Ano</Text>
                        <Text style={styles.subdescription}>Criado no ano {obra.ano}</Text>

                        <Text style={styles.subtitle}>Episódios / Capítulos</Text>
                        <Text style={styles.subdescription}>{obra.capitulos}</Text>
                    </View>
                }

                <TouchableOpacity style={styles.btn} onPress={handleNavigationToHome}>
                    <Text style={styles.btnTitle}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
        
    )
}

export default Item;

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
        position: 'relative',
        justifyContent: 'space-between',
    },

    picture: {
        width: '100%',
        height: 160,
        borderRadius: 5,
    },

    title: {
        fontWeight: '700',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#306272',
        marginTop: 30,
    },

    description: {
        fontWeight: '500',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#63838D',
        marginTop: 20,
        marginBottom: 20,
    },

    subtitle: {
        fontWeight: '700',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#306272',
        marginTop: 20,
        marginBottom: 10,
    },

    subdescription: {
        fontWeight: '300',
        // fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        color: '#306272'
    },

    btn: {
        width: 245,
        height: 40,
        backgroundColor: '#159AE4',
        position: 'absolute',
        bottom: 0,
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '15%',
    },

    btnTitle: {
        // fontFamily: 'Roboto_400Regular',
        fontWeight: '400',
        fontSize: 18,
        color: '#FFF',
    }
})