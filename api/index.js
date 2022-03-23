import {SERVICE_API, API_TOKEN} from '@env';

export function getProtocol(cpf) {
  console.log('=======>', `${SERVICE_API}/new/${cpf}`);
  return fetch(`${SERVICE_API}/new/${cpf}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: API_TOKEN,
    },
  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      return responseData;
    })
    .catch(function (error) {
      console.log('ERROR ====>' + error.message);
      throw error;
    });
}
export function storeHistoric(data, protocol) {
  const dfResponse = data;
  const queryResult = dfResponse.queryResult;
  const body = {
    queryResult: {
      fulfillmentMessages: '[]',
      allRequiredParamsPresent: queryResult.allRequiredParamsPresent,
      fulfillmentText: queryResult.fulfillmentText
        .replace(/\n/g, '\\\\n')
        .replace(/\r/g, '\\\\r')
        .replace(/\t/g, '\\\\t'),
      intent: queryResult.intent,
      intentDetectionConfidence: queryResult.intentDetectionConfidence,
      languageCode: queryResult.languageCode,
      parameters: {
        location: '',
        url: '',
      },
      queryText: queryResult.queryText,
    },
    responseId: dfResponse.responseId,
    protocol: protocol,
  };
  console.log('body =======================>', body);
  return fetch(`${SERVICE_API}/historic`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: API_TOKEN,
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      return responseData;
    })
    .catch(function (error) {
      console.log('ERROR ====>' + error.message);
      throw error;
    });
}
