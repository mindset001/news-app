import React from "react";
import { View, Text,Image, StatusBar } from "react-native";


export default function Details ({route, navigation}){
    const {article} = route.params
    return(
        <View>
            <StatusBar
        animated={true}
        backgroundColor="#008080"
       
        />
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <Text style={{color: '#008080', fontSize: 18}}>Headline: <Text style={{color: '#000',  fontSize: 14}}>{route.params.title}</Text></Text>
            <Image source={{uri:route.params.urlToImage}}
                 style={{
                    width: 350,
                    height: 200,
                    borderRadius: 10,
                    marginVertical: 10
                }}
            />
            <View style={{marginBottom: 10, justifyContent: 'space-between'}}>
            
            <Text style={{color: '#008080', fontSize: 18}}>Author: <Text style={{color: '#000',  fontSize: 14}}>{route.params.author}</Text></Text>
            <Text style={{color: '#008080', fontSize: 18, marginTop: 10}}>Published At: <Text style={{color: '#000',  fontSize: 14}}>{route.params.publishedAt}</Text></Text>
            </View>
            {/* <Text>{route.params.description}</Text> */}
            <Text>{route.params.description}</Text>
            
            <Text>{route.params.content}</Text>
            
           
            
            {/* urlToImage */}
            
            
        </View>
        </View>
    )
}