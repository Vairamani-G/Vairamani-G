import { Pressable, Text, TextInput, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState,useCallback } from 'react';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [select1,setSelect]=useState('');
  const [name,setName]=useState('');
  const [pass,setPass]=useState('');
  const [std,setStd]=useState('');
  const [checked,setChecked]=useState('')
  const data1=[
    {key:"1", value:"Garden Grove Technical School"},
    {key:"2",value:"Greenfield Middle School"},
    {key:"3",value:"Milestones Preparatory School"},
    {key:"4",value:"Mountainview Technical School"},
    {key:"5",value:"Oakwood Grammar School"},
    {key:"6",value:"Mountain Oak Technical School"},
    {key:"7",value:"Little Valley School"},
    {key:"8",value:"Martin Luther King Technical School"},
    {key:"9",value:"Harbor View Charter School"},
    {key:"10",value:"Greenland Secondary School"}
  ]
  const data2=[
    {key:"1", value:"V"},
    {key:"2",value:"VI"},
    {key:"3",value:"VII"},
    {key:"4",value:"VIII"},
    {key:"5",value:"IX"},
    {key:"6",value:"X"},
    {key:"7",value:"XI"},
    {key:"8",value:"XII"}
  ]


  const check=()=>{

    if(name==="" && select1==="" && std==="" && checked==="" && pass===""){
      alert("Please enter all field");
      return;
    }
     
    if (name==="") {
      alert('Please Enter Name');
      return;
    }

    if(select1===""){
      alert("Please select School");
      return;
    }

    if(std===""){
      alert("Please select Standard");
      return;
    }

    if(checked===""){
      alert("Select Male or Female");
      return;
    }

    if (pass==="") {
      alert('Please Enter Password');
      return;
    }

    alert("Success");
  }

  return (
    <View style={{
      backgroundColor:'#d4ac6e',
      flex:1
    }}>
      <View style={{
        backgroundColor:'#7e4a35',
        height:'25%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20
      }}>
        <View style={{
          alignItems:'center',
          paddingTop:50,
        }}>
          <Text style={{
            fontSize:48,
            color:'#FFF',
            fontWeight:'bold',
            textTransform:'uppercase'
          }}>
            Student 
          </Text>
          <Text style={{
            fontSize:48,
            color:'#FFF',
            fontWeight:'bold',
            textTransform:'uppercase'
          }}>
            Registration
          </Text>
        </View>
      </View>
      <View style={{
        backgroundColor:'#dbceb0',
        height:'50%',
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        paddingHorizontal:20,
        borderRadius:20,
        margin:20,
        alignItems:'stretch',
        marginTop:70
      }}>
        <View style={{
          paddingTop:20,
          alignItems:'center',
          flexDirection:'row',
        }}>
          <Text style={{
            fontSize:29,
            marginRight:10,
            fontWeight:'bold',
          }}>
            Name :
          </Text>
          <TextInput
          placeholder='Name'
          onChangeText={(value)=>setName(value)}
          style={{
          borderWidth:1,
          borderRadius:5,
          height:50,
          // backgroundColor:'white',
          fontSize:20,
          height:40,
          width:150,
          justifyContent: 'center',
          paddingLeft:20
          }}        
          />
        </View >
        <View style={{
          paddingTop:20,
          flexDirection:'row',         
        }}>
          <Text style={{
            fontSize:29,
            marginRight:10,
            fontWeight:'bold',
          }}>
            School :
          </Text>
          <SelectList
          data={data1}
          setSelected={setSelect}
          />
        </View>
        <View style={{
          paddingTop:20,
          flexDirection:'row',         
        }}>
          <Text style={{
            fontSize:29,
            marginRight:10,
            fontWeight:'bold',
          }}>
            Standard :
          </Text>
          <SelectList
          data={data2}
          setSelected={setStd}
          />
        </View> 
        <View style={{
          paddingTop:20,
          flexDirection:'row',         
        }}>
          <RadioButton
          value='Male'
          status={checked==='Male'? 'checked':'unchecked'}
          onPress={()=>setChecked('Male')}/>
          <Text style={{
            marginRight:20,
            fontSize:29,
            fontWeight:'bold',
          }}>
              Male
          </Text>
          <RadioButton
          value='Female'
          status={checked==='Female'? 'checked':'unchecked'}
          onPress={()=>setChecked('Female')}/>          
          <Text  style={{
            marginRight:20,
            fontSize:29,
            fontWeight:'bold',
          }}>
            Female
          </Text>
        </View>
        <View style={{
          paddingTop:20,
          alignItems:'center',
          flexDirection:'row',
        }}>
          <Text style={{
            fontSize:29,
            marginRight:10,
            fontWeight:'bold',
          }}>
            Password :
          </Text>
          <TextInput
          placeholder='password'
          onChangeText={(value)=>setPass(value)}
          style={{
          borderWidth:1,
          borderRadius:5,
          height:50,
          // backgroundColor:'white',
          fontSize:20,
          height:40,
          width:150,
          justifyContent: 'center',
          paddingLeft:20
          }}        
          />
        </View>
        <View style={{
          paddingTop:40,
        }}>
        <Pressable value="submit">
          <Text style={{
            fontSize:29,
            backgroundColor:'#4f3222',
            color:'white',
            height:40, 
            width:130,
            paddingLeft:25,
            borderRadius:20,
            marginLeft:80
            }}
            onPress={check}>
              SUBMIT
          </Text>
        </Pressable>
        </View>
      </View>
    </View>
   
  );
}


