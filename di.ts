class XMLHttpService implements Connection {

    const xhr = new XMLHttpRequest();
    request(url: string, options: any) {
        this.xhr.open();
        this.xhr.send();
    }

}

class MockHttpServeice implements Connection{

    request(url: string, options: any) {
        // ......
        return 'data';
    }

}

class Http {
    constructor(private xmlhttpService: Connection) { }


    get (url: string, options: any) {
        this.xmlhttpService.request(url, 'GET');
    }

    post(url: string, options: any) {
        this.xmlhttpService.request(url, 'POST');
    }
}

interface Connection {
    request(url: string, options: any);
}