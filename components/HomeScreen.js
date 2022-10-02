import React from "react";
import { View, Text,  TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import Details from '../components/Details';
import { Searchbar } from "react-native-paper";
import axios from "axios";

export default function HomeScreen ({navigation}){
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false)
    console.log(data.articles);
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-06-27&sortBy=publishedAt&apiKey=39ab38da6ad14436a9a3a39e8d31e569"
   

    const getData = () => {
        // setLoading(true);
        fetch(url)
        // setLoading(false)
        .then((res) => res.json())
        .then((json)=> setData(json))
        .catch((err) => console.log(err))
        setLoading(false)
    }
       
    // setLoading(false)

    useEffect(()=> {
        setLoading(true)
        setTimeout
        getData()
    },[])

  

        console.log(data);
    const onChangeSearch = query => setSearchQuery(query);
    return(
       
        <>
         <StatusBar
        animated={true}
        backgroundColor="#008080"
       
        />
        <Searchbar
            placeholder="Search here"
            value={searchQuery}
            onChangeText={onChangeSearch}
        />
        { loading ? <ActivityIndicator size= 'large' color='#008080'/> :
            Object.keys(data).length > 0 &&(
                <ScrollView>
                    <View 
                        style={{
                            flex: 1,
                            justifyContent: "space-around",
                            alignItems: 'center'
                        }}
                    >
                        {
                            data.articles.map(( article, index) => (

                             
                                     <View key={index}>
                                         <TouchableOpacity onPress={()=> navigation.navigate('Details', article)}>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginVertical: 15,
                                        marginHorizontal: 20,
                                        borderWidth: 1,
                                        borderRadius: 10,
                                        borderColor: '#008080',
                                        paddingLeft: 10

                                      }}  
                                    >
                                    <Text style={{fontSize:18, fontWeight: 'bold', flex:1}} >{article.title}</Text>
                                   
                                    <Image
                                        source={{uri:article.urlToImage}}
                                        style={{
                                            width: 150,
                                            height: 150,
                                            borderRadius: 10
                                        }}
                                    />
                                   
                                    
                                    </View>
                                    
                                    
                                    </TouchableOpacity>
                                   <View style={{
                                       
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginVertical: 15,
                                        marginHorizontal: 20,
                                       

                                      }} >
                                   <Text style={{fontSize: 16, marginHorizontal: 20}}>{article.description}</Text>
                                   <TouchableOpacity
                                    style={{backgroundColor: '#008080', width: 300, alignItems: 'center', height: 50, justifyContent: 'center', borderRadius: 50, marginTop: 20}}
                                      onPress={()=> navigation.navigate('Details', article)}
                                    >
                                   <Text style={{color: '#fff'}}>Read more</Text>
                                   </TouchableOpacity>
                                   </View>
                                    {/* <Text>{article.publishedAt}</Text> */}
                                </View>
                              
                            ))
                        }

                    </View>
                </ScrollView>
            )
        }
        </>
        // <View>
        //     <Text>Home screen</Text>
        //     <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
        //         <Text>next</Text>
        //     </TouchableOpacity>
        //     <TextInput
        //         placeholder="search here"
        //         value={searchQuery}
        //         onChangeText = {onChangeSearch}
        //     />


            
        // </View>
        
    )
}  