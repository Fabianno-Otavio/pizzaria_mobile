import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../contexts/AuthContext';

function Routes(){

    const { isAuthenticated } = useAuth();
    const loading = false;

    if(loading){
        return(
            <View 
                style={{
                    flex: 1, 
                    backgroundColor: '#1D1D2E', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}
            >
            <ActivityIndicator size={60} color="#FFF"/>
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;