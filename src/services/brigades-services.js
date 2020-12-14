export default class GetBrigades{

    async getResource(url) {
        const res = await fetch(`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getBrigadesItems () {
        return await this.getResource('/brigades/');
    }
}