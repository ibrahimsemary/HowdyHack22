import get_weathers from '../Axios/weatherapi'

const get_clothes = async (location) => {
    let data = await get_weathers(location);
    console.log(data)
    let clothes = {
        underwear: 7,
        socks:7,

        umbrella: 0,
        raincoat: 0,
        rainboot: 0,

        gloves: 0,
        sweater: 0,
        puffers: 0,
        scarfs: 0,
        boots: 0,
        thickPants:0,

        pants: 0,
        longTshirt: 0,
        sneakers: 0,

        shortTshirt: 0,
        sandals:0,
        shorts: 0,

        hat:0,
        sunscreen:0
    }
    
    if (data.rainDay > 0){
        clothes.umbrella = 1;
        clothes.raincoat = 1;
        clothes.rainboot = 1;
        clothes.longTshirt += data.rainDay;

      }
    if (data.lowWeatherDays > 0){
        clothes.gloves =1;
        clothes.sweater = 1;
        clothes.puffers = 1;
        clothes.scarfs = 1;
        clothes.boots = 1;
        clothes.pants += data.lowWeatherDays;
        clothes.longTshirt += data.lowWeatherDays;
    }
    if (data.mediumWeatherDays > 0){
        clothes.longTshirt += data.mediumWeatherDays;
        clothes.pants += data.mediumWeatherDays;
        clothes.sneakers += 1;
    }
    if (data.highWeatherDays > 0){
        clothes.shortTshirt += data.highWeatherDays;
        clothes.sandals += 1;
        clothes.shorts +=data.highWeatherDays;
    }
    if (data.highUV > 0){
        clothes.hat = 1;
        clothes.sunscreen = 1;
    }
    console.log(clothes);
    return clothes;

    
}
export default get_clothes;