import { StyleSheet } from 'react-native';

const notificationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    homeIcon: {
        width: 25,
        height: 25,
    },
    notificationContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    notification: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        color: '#333',
    },
});

export default notificationStyles;
