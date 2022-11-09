import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard(){
    const { signOut } = useAuth();
    return(
        <View>
            <Text>Tela Dashboard</Text>
            <Button
                title= 'Sair do app'
                onPress={signOut}
            />
        </View>
    )
}