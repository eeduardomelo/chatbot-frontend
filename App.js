import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import Voice from 'react-native-voice';
//Importando configurações
import {private_key, client_email} from './app.json';
import {View, Text} from 'react-native';
import {getProtocol, storeHistoric} from './api';
export default class Chat extends React.Component {
  state = {
    messages: [],
    currentMessage: {},
    protocol: false,
  };

  async componentDidMount() {
    // We need to integrate with APP of HMV to get CPF or another data of current user
    const cpf = '68804066024';
    const protocol = await getProtocol(cpf);
    console.log('protocol==============>', protocol);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Olá! Como posso ajudar?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
      protocol: protocol.protocol,
    });
    Dialogflow_V2.onListeningStarted(()=>{})
    Dialogflow_V2.setConfiguration(
      client_email,
      private_key,
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      'newagent-uc9l',
    );
    Dialogflow_V2.startListening(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      },
    );
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    messages.forEach(message => {
      console.log(message.text);
      Dialogflow_V2.requestQuery(
        message.text,
        result => {
          console.log('result =======>>>', result);
          messages = [
            {
              _id: result.responseId,
              text: result.queryResult.fulfillmentText,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Atendimento HMV',
              },
            },
          ];
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
            currentMessage: result
          }), async ()=>{
            const  { currentMessage, protocol } = this.state                        
            const response = await storeHistoric(currentMessage, protocol)

            console.log('response====>', response)
          });          
        },
        error => console.log(error),
      );
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          placeholder="Digite aqui..."
          locale="pt-BR"
          user={{
            _id: 1,
          }}
        />            
      </View>
    );
  }
}
