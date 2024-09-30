import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from '../../components/ButtonBlack/Button';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';


export default function Profile() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Header leftText nameLeftText='< Voltar' />
            <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500, marginBottom: 16 }}>Perfil</Text>

            <View style={styles.logoname}>
                <Image style={styles.image}
                    source={{ uri: 'https://avatars.githubusercontent.com/u/113631460' }}
                />
                <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500 }}>@dev_vcm</Text>
                <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500 }}>Desenvolvedor</Text>
            </View>
            <Button TitleButton='Concluir' onPress={() => { navigation.goBack() }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 50,
        gap: 16,
    },
    button: {
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#FF6B00',
    },
    logoname: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 10
    },
    image: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});
