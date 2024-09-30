import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '../../components/ButtonBlack/Button';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';


export default function MenuPrincipal() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Header leftText nameLeftText='< Voltar' />

            <View style={styles.logoname}>
                <Feather name="check-circle" size={100} color="#292827" />
                <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500 }}>O que deseja fazer?</Text>
                <Button TitleButton='Abrir Calendário' onPress={() => { navigation.navigate('Calendar' as never) }} />
                <Button TitleButton='Abrir Lista de Tarefas' onPress={() => { navigation.navigate('Tasks' as never) }} />
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
    logoname: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 20
    },
});
