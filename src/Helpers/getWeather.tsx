export const getWeather = async (latitude:number = 6.125, 
                                longitude: number = -75.75, 
                                temperature:number = 0, 
                                relative_humidity_2m:number=0,
                                timezone:string ='GMT')
                                :Promise<{latitude:number,
                                            longitude:number, 
                                            temperature: number, 
                                            relative_humidity_2m: number, 
                                            timezone: number }> => {
    const Url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m=${temperature}&current=relative_humidity_2m=${relative_humidity_2m}&timezone=${timezone}`;
    const response = await fetch(Url);

    const data = await response.json();

    return {
        latitude: data.latitude,
        longitude: data.longitude,
        temperature: data.current.temperature_2m,
        relative_humidity_2m: data.current.relative_humidity_2m,
        timezone: data.timezone
      };

}