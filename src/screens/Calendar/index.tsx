import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/ButtonBlack/Button';
import { Calendar as Calendario, DateData, LocaleConfig } from "react-native-calendars"
import { DayState } from "react-native-calendars/src/types"
import { Feather } from "@expo/vector-icons"
import { ptBR } from "../../utils/localeCalendarConfig"
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"


export default function Calendar() {

    const [day, setDay] = useState<DateData>()
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Header leftText nameLeftText='< Voltar' rightText nameRightText='Exportar >' />
            <Text style={{ color: '#292827', fontSize: 20, fontWeight: 500, marginBottom: 16 }}>Calendário</Text>
            <View style={styles.containerBody}>
                <View style={styles.containerCalendar}>

                    <Calendario
                        style={styles.calendar}
                        renderArrow={(direction: "right" | "left") => (
                            <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
                        )}
                        headerStyle={{
                            borderBottomWidth: 0.5,
                            borderBottomColor: "#E8E8E8",
                            paddingBottom: 10,
                            marginBottom: 10,
                        }}
                        theme={{
                            textMonthFontSize: 18,
                            monthTextColor: "#E8E8E8",
                            todayTextColor: "#FF6B00",
                            selectedDayBackgroundColor: "#FF6B00",
                            selectedDayTextColor: "#E8E8E8",
                            arrowColor: "#E8E8E8",
                            calendarBackground: "transparent",
                            textDayStyle: { color: "#E8E8E8" },
                            textDisabledColor: "#717171",
                            arrowStyle: {
                                margin: 0,
                                padding: 0,
                            },
                        }}
                        minDate={new Date().toDateString()}
                        hideExtraDays
                        onDayPress={setDay}
                        markedDates={
                            day && {
                                [day.dateString]: { selected: true },
                            }
                        }
                        dayComponent={({
                            date,
                            state,
                        }: {
                            date: DateData
                            state: DayState
                        }) => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.day,
                                        date.dateString === day?.dateString && styles.daySelected,
                                    ]}
                                    onPress={() => setDay(date)}
                                >
                                    <Text
                                        style={[
                                            styles.dayText,
                                            (state === "inactive" || state === "disabled") &&
                                            styles.disabled,
                                            state === "today" && styles.today,
                                            date.dateString === day?.dateString && styles.dayText,
                                        ]}
                                    >
                                        {date.day}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
            <Button TitleButton="Concluir" onPress={() => { navigation.goBack() }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 50,
        gap: 16,
    },
    containerBody: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCalendar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#292827",
    },
    calendar: {
        width: '100%',
        margin: 50
    },
    selected: {
        color: "#fff",
        fontSize: 16,
        marginTop: 42,
    },
    dayText: {
        color: "#E8E8E8",
    },
    day: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    disabled: {
        color: "#717171",
    },
    today: {
        color: "#FF6B00",
        fontWeight: "bold",
    },
    daySelected: {
        backgroundColor: "#FF6B00",
    },
});
