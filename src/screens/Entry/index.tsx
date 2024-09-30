import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/ButtonBlack/Button';
import { useNavigation } from '@react-navigation/native';


export default function Entry() {

    const navigation = useNavigation();

    function handleGoPerfil() {
        navigation.navigate('Profile' as never)
    }

    return (
        <View style={styles.container}>

            <Pressable style={styles.button} onPress={handleGoPerfil}>
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 500 }}>Perfil</Text>
            </Pressable>
            <View style={styles.logoname}>
                <Feather name="check-circle" size={300} color="#292827" />
                <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500 }}>UniTASK</Text>
                <Button TitleButton='Entrar' onPress={() => { navigation.navigate('Menu' as never) }} />
            </View>

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
        gap: 20
    },
});
