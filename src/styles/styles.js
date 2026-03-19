import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F9FA", // Fundo levemente acinzentado (estilo iOS)
    },
    title: {
        fontSize: 26,
        fontWeight: "800",
        color: "#1A237E",
        textAlign: "left",
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    inputBusca: {
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#FFF",
        padding: 18,
        marginBottom: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // Sombrinha suave
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2D3436",
    },
    email: {
        fontSize: 13,
        color: "#636E72",
        marginTop: 2,
    },
    phone: {
        fontSize: 12,
        color: "#B2BEC3",
        marginTop: 2,
    },
    // Botão de Adicionar (Estilo Flutuante ou Largo)
    btnAdicionar: {
        backgroundColor: "#1A237E",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    btnTexto: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 16,
    },
    // Botões pequenos dentro do Card
    btnEditar: {
        backgroundColor: "#E8EAF6",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 5,
    },
    btnTextoEditar: {
        color: "#3F51B5",
        fontWeight: "600",
        fontSize: 12,
    },
    btnDeletar: {
        backgroundColor: "#FFEBEE",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    btnTextoDeletar: {
        color: "#D32F2F",
        fontWeight: "600",
        fontSize: 12,
    }
    
});