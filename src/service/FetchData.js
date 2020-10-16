export default class FetchData {

    //получение данных

    startUrl = 'https://api.spacexdata.com/v4/'

    getResourse = async url => {
        const res =await fetch(url);

        if (!res.ok) {
            throw new Error (`Произошла ошибка ${res.status}`)
        }

        return await res.json()
        //получаем распакованный ответ от сервера
    }; 

    getRocket = async() => 
        await this.getResourse(this.startUrl + 'rockets');

    getLaunches = async() => 
        await this.getResourse(this.startUrl + 'launches/past');

    getCompany = async() => 
        await this.getResourse(this.startUrl + 'company');

}