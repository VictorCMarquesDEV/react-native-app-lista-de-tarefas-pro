import { Container, Input, InputButton, Text } from "./styles";

type Props = {
    onPress: () => void;
    onChangeText: (texto: string) => void;
    value: string;
}

export function InputAddTask({ onPress, onChangeText, value }: Props) {
    return (
        <Container>
            <Input
                placeholder='Digite algo...'
                placeholderTextColor="#292827"
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
            />
            <InputButton onPress={onPress}>
                <Text>P</Text>
            </InputButton>
        </Container>
    );
}