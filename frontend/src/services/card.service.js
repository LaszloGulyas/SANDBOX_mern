export default class CardService {
    backendServiceHost = process.env.REACT_APP_BACKEND_HOST;

    getCard(resultCallback) {
        fetch(this.backendServiceHost + '/api/card')
            .then(response => response.json())
            .then(data => {
                resultCallback(data);
            });
    }
}
