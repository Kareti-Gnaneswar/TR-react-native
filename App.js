import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { openBrowserAsync } from 'expo-web-browser';
import notificationStyles from './notificationstyles';
//home page screen
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          
            <Image style={styles.home} source={require('./assets/home.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('notification')}>
            <Image style={styles.not} source={require('./assets/noti.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={styles.boxes1}>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={() => navigation.navigate('TRquestions')}>
                    <Text style={styles.botext}>TR Questions</Text></TouchableOpacity>
            </View>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={() => navigation.navigate('HRQuestions')}>
                    <Text style={styles.botext}>HR Questions</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
            <View style={styles.boxes2}>
                <View style={styles.box1} >
                <TouchableOpacity onPress={() => navigation.navigate('McqQuestions')}>
                    <Text style={styles.botext}>MCQ practice questions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxm}>
                <TouchableOpacity onPress={() => navigation.navigate('Mockinterviews')}>
                    <Text style={styles.botext}>MOCk interviews</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.box2}>
            <TouchableOpacity onPress={() => navigation.navigate('Workshopareas')}>
                <Text style={styles.botext}>WORKSHOP areas</Text>
                </TouchableOpacity>
            </View>
            <View />
            <View />
        </View>
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
            <Text style={styles.fotext}>FAQ's</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Blog')}>    
            <Text style={styles.fotext}>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Placements')}>
            <Text style={styles.fotext}>Placements</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
            <Text style={styles.fotext}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
            <Text style={styles.fotext}>About Us</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
}
// footer code this is used in all the pages 
function Footer() {
    return (
        <View style={styles.footers}>
        <Text style={styles.fotext}>FAQ's</Text>
        <Text style={styles.fotext}>Blogs</Text>
        <Text style={styles.fotext}>Placements</Text>
        <Text style={styles.fotext}>Contact us</Text>
        <Text style={styles.fotext}>About Us</Text>
    </View>

    );
}
// college to corporate page screen this page is in menu bar 
function CollegetocorporateScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Button title="Anirudh link here to button" onPress ={ ()=> openBrowserAsync("https://www.bodhasoft.com/college-to-corporate-program#:~:text=We%20provide%20a%20full%20360,crack%20any%20MNC%20with%20ease.")} />

   

        </View>
    );
}
// Workshoparea page screen this page is in menu bar 
function WorkshopareaScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Mentoring page screen this page is in menu bar 
function MentoringScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Profile page screen this page is in menu bar 
function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}
// Logout page screen this page is in menu bar 
function LogoutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
        </View>
    );
}

// HR questions screen this page is in body 

function HRQuestions({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>   
        </View>
    );
}
// MCQ questions screen this page is in body 
function McqQuestions({ navigation }) {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/mcq/subjects');
            setSubjects(response.data);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    const handleSubjectSelection = async (subject) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/mcq/questions/${subject}`);
            navigation.navigate('SubjectQuestions', { subject, questions: response.data });
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.subjectList}>
                <Text style={styles.subjectHeader}>Select a Subject</Text>
                {subjects.map((subject, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.subjectButton}
                        onPress={() => handleSubjectSelection(subject)}
                    >
                        <Text style={styles.subjectText}>{subject}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.footerst}>
                <Text style={styles.fotextt}>FAQ's</Text>
                <Text style={styles.fotextt}>Blogs</Text>
                <Text style={styles.fotextt}>Placements</Text>
                <Text style={styles.fotextt}>Contact us</Text>
                <Text style={styles.fotextt}>About Us</Text>
            </View>
        </View>
    );
}


function SubjectQuestions({ route }) {
    const { subject, questions } = route.params;
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showAnswer, setShowAnswer] = useState(false);

    const handleSelectOption = (questionId, option) => {
        setSelectedOptions({ ...selectedOptions, [questionId]: option });
    };

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Subject: {subject}</Text>
            <ScrollView>
                {questions.map((question, index) => (
                    <View key={index} style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 16 }}>{question.question}</Text>
                        {question.options.map((option, optionIndex) => (
                            <TouchableOpacity
                                key={optionIndex}
                                style={{
                                    padding: 10,
                                    backgroundColor: selectedOptions[question.id] === option ? 'lightblue' : 'white',
                                    borderWidth: 1,
                                    borderColor: 'blue',
                                    borderRadius: 5,
                                    marginTop: 5,
                                }}
                                onPress={() => handleSelectOption(question.id, option)}
                                disabled={showAnswer}
                            >
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        {!showAnswer && (
                            <TouchableOpacity onPress={handleShowAnswer} style={{ marginTop: 10 }}>
                                <Text style={{ color: 'blue' }}>Show Answer</Text>
                            </TouchableOpacity>
                        )}
                        {showAnswer && (
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: 'green' }}>Correct Answer:</Text>
                                <Text>{question.answer}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'blue' }}>Explanation:</Text>
                                <Text>{question.explanation}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

// TR questions screen this page is in body 
function TRQuestions({ navigation }) {
    return (
        <View style={styles.mcq}>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
            </View>
            <View style={styles.cvr}>
        
            <View style={styles.cv}>
            <TouchableOpacity onPress={() => navigation.navigate('C language')}>
             <Text>c language</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.cv}>
            <TouchableOpacity onPress={() => navigation.navigate('C++ language')}>
                <Text>c++</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.cvrm}>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('Python')}>
                <Text>python</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('java')}>
                <Text>java</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cvm}>
            <TouchableOpacity onPress={() => navigation.navigate('sql')}>
                <Text>sql</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerst}>
        <Text style={styles.fotextt}>FAQ's</Text>
        <Text style={styles.fotextt}>Blogs</Text>
        <Text style={styles.fotextt}>Placements</Text>
        <Text style={styles.fotextt}>Contact us</Text>
        <Text style={styles.fotextt}>About Us</Text>
    </View>
          
        </View>
    );
}
// C LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Cmock({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in c page</Text>
        <Footer/>
        </View>
    );
}
// C++ LAnguage  screen this page is in TR Questions  and also MOCk interview pages
function Cq({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Text style={{textAlign:"center"}}>hi am in c++ page</Text>
        <Footer/>
        </View>
    );
}
// MOCK INTERVIEWS  screen this page is in body
function Mockinterviews({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
// NOTIFICATION  this page will open when we click the notification icon in body
function Notificationpage({ navigation }) {
    const [notifications, setNotifications] = useState([]);
    const [isNewNotification, setIsNewNotification] = useState(false);

    useEffect(() => {
        fetchNotifications(); // Fetch notifications when component mounts
    }, []);

    useEffect(() => {
        // Check if there are new notifications
        if (notifications.length > 0) {
            setIsNewNotification(true);
        }
    }, [notifications]);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get("http://192.168.0.123:8080/api/notifications/getNotifications");
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
            // Handle error fetching notifications
        }
    };

    return (
        <View style={notificationStyles.container}>
            <View style={notificationStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={[notificationStyles.homeIcon, isNewNotification && notificationStyles.newNotificationIcon]} source={require('./assets/home.png')} />
                </TouchableOpacity>
            </View>
            <View style={notificationStyles.notificationContainer}>
                {/* Render notifications */}
                {notifications.map((notification, index) => (
                    <View key={index} style={notificationStyles.notification}>
                        <Text style={notificationStyles.title}>Title: {notification.title}</Text>
                        <Text style={notificationStyles.content}>Content: {notification.content}</Text>
                    </View>
                ))}
            </View>
            <Footer />
        </View>
    );
}
// WORKSHOP AREAS  screen this page is in body
function Workshopareas({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
  
        <View>
    <View style={styles.poll}>
    <TouchableOpacity onPress={() => navigation.navigate('Poll division')}>
    <Text>Poll division</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.poll}>
    <TouchableOpacity onPress={() => navigation.navigate('coding')}>
        <Text>Coding environment</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.footerstr}>
        <Text style={styles.fotextr}>FAQ's</Text>
        <Text style={styles.fotextr}>Blogs</Text>
        <Text style={styles.fotextr}>Placements</Text>
        <Text style={styles.fotextr}>Contact us</Text>
        <Text style={styles.fotextr}>About Us</Text>
    </View>
        </View>
    );
}
//Coding page this page will open in workshop area page 
function Coding({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//POLL page this page will open in workshop area page 
function Poll({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//FAQ page this page will open when we touch the FAQ in HOMESCREEN PAGE
function FAQ({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//BLOGS page this page will open when we touch the BLOGS in HOMESCREEN PAGE
function Blogs({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//CONTACT US page this page will open when we touch the CONTACT US in HOMESCREEN PAGE
function ContactUS({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//PLACEMENTS page this page will open when we touch the PLACEMENTS in HOMESCREEN PAGE
function Placementspage({ navigation }) {
    return (
        <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//ABOUT US page this page will open when we touch the ABOUT US in HOMESCREEN PAGE
function Aboutus({ navigation }) {
    return (
       <View>
        <View style={styles.header}>
    
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.homei} source={require('./assets/home.png')} />
            </TouchableOpacity>
            <Image style={styles.not} source={require('./assets/noti.png')} />
        </View>
        <Footer/>
        </View>
    );
}
//menu bar code 
const Drawer = createDrawerNavigator();
function Mystack() {
    return (
        <Drawer.Navigator initialRouteName="Home2">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="College to corporate" component={CollegetocorporateScreen} />
    <Drawer.Screen name="Workshoparea" component={WorkshopareaScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Mentoring" component={MentoringScreen} />
    <Drawer.Screen name="Log out" component={LogoutScreen} />
   
</Drawer.Navigator> 
 );
}
  
const Stack = createStackNavigator();
//STACK NAVIGATION code
 function Apps() {
    return (
        
    <Stack.Navigator>
    <Stack.Screen name='Stackstack1' component={Mystack}  options={{headerShown:false}}/>
    
      <Stack.Screen name ="HomeScreen1" component={HomeScreen}/>
      <Stack.Screen name ="TRquestions" component={TRQuestions}/>
      <Stack.Screen name ="HRQuestions" component={HRQuestions}/>
      <Stack.Screen name ="McqQuestions" component={McqQuestions}/>
      <Stack.Screen name ="Mockinterviews" component={Mockinterviews}/>
      <Stack.Screen name ="Workshopareas" component={Workshopareas}/>
      <Stack.Screen name ="FAQs" component={FAQ}/>
      <Stack.Screen name ="Blog" component={Blogs}/>
      <Stack.Screen name ="Placements" component={Placementspage}/>
      <Stack.Screen name ="Contact Us" component={ContactUS}/>
      <Stack.Screen name ="About Us" component={Aboutus}/>
      <Stack.Screen name ="entoring" component={Footer}/>
      <Stack.Screen name ="notification" component={Notificationpage}/>
      <Stack.Screen name ="Poll division" component={Poll}/>
      <Stack.Screen name ="coding" component={Coding}/>
</Stack.Navigator> 
        

        
    );
}
export default function App() {
    return (
        <NavigationContainer>
           
                <Apps/>

        </NavigationContainer>
    );
}
// css code that is used in all the pages
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',


    }, header: {
        
        height: "15%",
        width: "100%",
        flexDirection: "row-reverse"
    },
    home: {
        marginLeft: 45,
        height: 50,
        width: 50
    },
    homei: {
        marginLeft: 45,
        height: 50,
        width: 50
    },
    not: {
        marginRight:5,
        height: 50,
        width: 50
    },
    body: {

        height: "60%",

    },
    box1: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
    },
    boxes1: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 35
    },
    boxes2: {

        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 35
    },
    box2: {
        justifyContent: "center",
        marginTop: 30,
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        textAlign: "center",
        marginLeft: 125
    },
    boxm: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 50,
     
      justifyContent:"center",
      alignItems:"center"
    },
    footer: {
        flexDirection: "row",
        marginTop: 140,
        justifyContent: "space-evenly"
    },
    fotext: {
        color: "blue"
    },
    botext: {
        textAlign: "center"
    },
    manasa:{borderWidth : 2, boderColor : "black", borderRadius : 10, width : 220, marginBottom : 30, justifyContent : "center", alignItems : "center"}
,
footers:{
    marginTop: 550,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
cvr:{
    marginTop:20,
   flexDirection:"row",
justifyContent:"space-evenly"
   
 },
 cvrm:{
    flexDirection:"row",
 justifyContent:"space-evenly"
    
  },
cv:{
    alignItems:"center",
    justifyContent:"center",
     marginTop:10,
     height:100,
     width:100,
     backgroundColor:"skyblue",
     borderRadius:15
 },
cvm:{
    alignItems:"center",
    justifyContent:"center",
    marginRight:0,
     marginTop:50,
     height:100,
     width:100,
     backgroundColor:"skyblue",
     borderRadius:15
 },
poll:{
    height:200,
    width:"50%",
    marginTop:10,
    backgroundColor:"violet",
    marginLeft:90,
    justifyContent:"center",
    alignItems:"center"
},
footerst:{
    marginTop: 290,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
fotextt: {
    color: "blue"
},
fotextr: {
    color: "blue"
},
footerstr:{
    marginTop: 130,
    justifyContent: "space-evenly",
    flexDirection:"row"
},
});