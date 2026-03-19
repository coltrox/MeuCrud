import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput, ActivityIndicator, Alert } from "react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";
import { SearchBar } from "react-native-screens";
import { DrawerActions } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {

    // estado da lista
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [people, setPeople] = useState([]);
    const [pesquisar, setPesquisar] = useState("");
    
    async function loadPeople(){
        setCarregando(true);
        setErro(null);

        try {
            const data = await getPeople();
            setPeople(data);
        }catch (e) {
            setErro("Não deu para carregar os dados");
            Alert.alert("Erro", "O servidor está desligado")
        }finally {
            setCarregando(false);
        }
    }

    // executa ao abrir tela
    useEffect(()=>{
        loadPeople();
        },[]
    );

    const filteredPeople = people.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(pesquisar.toLowerCase());
    });


    if (carregando && people.length === 0) { 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" /> 
            <Text style={{ marginTop: 10 }}>Buscando dados...</Text>
        </View>
    );
}

    if (erro && people.length === 0) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{erro}</Text>
            <Button title="Tentar Novamente" onPress={loadPeople} />
        </View>
    );
}

return(
    <View style={styles.container}>
        <Text style={styles.title}>Pessoas</Text>
        <TextInput style={{
            height: 40,
            borderColor: 'black',
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: 'white'
        }}
        placeholder="Buscar pessoas"
        value={pesquisar}
        onChangeText={setPesquisar}
        />
        <Button
            title="Adicionar Pessoa"
            onPress={() => navigation.navigate("AddEdit")}
        />
        <FlatList
            data={filteredPeople}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <CardPersonal
                    item={item}
                    navigation={navigation}
                    refresh={loadPeople}
                />
            )}
        />
    </View>
);
}

function CardPersonal({item, navigation, refresh}){

    return(

        <View style={styles.card}>
            <View>
                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>
                <Text style={styles.email}>
                    {item.email}
                </Text>
                <Text style={styles.phone}>
                    {item.phone}
                </Text>
            </View>
            <View>
                <Button
                    title="Editar"
                    onPress={()=> navigation.navigate("AddEdit",{person:item})}
                />
                <Button
                    title="Deletar"
                    onPress={async ()=>{
                        await deletePerson(item.id);
                        refresh();
                    }}
                />
            </View>
        </View>
    )
}