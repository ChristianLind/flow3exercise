import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store';

export function Logout() {
    const dispatch = useDispatch<AppDispatch>();

    SecureStore.deleteItemAsync("token");
}