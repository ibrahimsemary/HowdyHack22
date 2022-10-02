import get_weathers from '../Axios/weatherapi'

const get_clothes = async (from, location) => {
    let data = await get_weathers(location);
    console.log(data)
    let clothes = [
        //0
        {
            item: "underwear",
            count: 7, 
            isChecked: false
        },
        //1
        {
            item: "sock",
            count: 7,
            isChecked: false
        },
        //2
        {
            item: "umbrella",
            count: 0,
            isChecked: false
        },
        //3
        {
            item: "raincoat",
            count: 0,
            isChecked: false
        },
        //4
        {
            item: "rainboot",
            count: 0,
            isChecked: false
        },
        //5
        {
            item: "gloves",
            count: 0,
            isChecked: false
        },
        //6
        {
            item: "sweater",
            count: 0,
            isChecked: false
        },
        //7
        {
            item: "puffer",
            count: 0,
            isChecked: false
        },
        //8
        {
            item: "scarf",
            count: 0,
            isChecked: false
        },
        //9
        {
            item: "boot",
            count: 0,
            isChecked: false
        },
        //10
        {
            item: "pants",
            count: 0,
            isChecked: false
        },
        //11
        {
            item: "long T-shirt",
            count: 0,
            isChecked: false
        },
        //12
        {
            item: "sneakers",
            count: 0,
            isChecked: false
        },
        //13
        {
            item: "short T-shirt",
            count: 0,
            isChecked: false
        },
        //14
        {
            item: "sandals",
            count: 0,
            isChecked: false
        },
        //15
        {
            item: "shorts",
            count: 0,
            isChecked: false
        },
        //16
        {
            item: "hat",
            count: 0,
            isChecked: false
        },
        //17
        {
            item: "sunscreen",
            count: 0,
            isChecked: false
        },
        //18
        {
            item: "deodorant",
            count: 0,
            isChecked: false
        },
        //19
        {
            item: "phone charger",
            count: 1,
            isChecked: false
        },
        //20
        {
            item: "toothpaste",
            count: 1,
            isChecked: false
        },
        //21
        {
            item: "toothbrush",
            count: 1,
            isChecked: false
        },
        //22
        {
            item: "wallet",
            count: 1,
            isChecked: false
        },
        //23
        {
            item: "water bottle",
            count: 0,
            isChecked: false
        },
        //24
        {
            item: "towel",
            count: 0,
            isChecked: false
        },
        //25
        {
            item: "swim gear",
            count: 0,
            isChecked: false
        },
        //26
        {
            item: "sleep wear",
            count: 1,
            isChecked: false
        },
        //27
        {
            item: "laptop",
            count: 1,
            isChecked: false
        },
        //28
        {
            item: "sunglass",
            count: 0,
            isChecked: false
        },
        //29
        {
            item: "ID",
            count: 1,
            isChecked: false
        },
        //30
        {
            item: "passport",
            count: 0,
            isChecked: false
        },


    ]
    
    if (data.rainDay > 0){
        clothes[2].count = 1;
        clothes[3].count = 1;
        clothes[4].count = 1;
        clothes[11].count += data.rainDay;
        clothes[18].count = 1;
        clothes[23].count = 1;
        clothes[24].count = 1;
        clothes[25].count = 1;
        clothes[28].count = 1;

      }
    if (data.lowWeatherDays > 0){
        clothes[5].count =1;
        clothes[6].count = 1;
        clothes[7].count = 1;
        clothes[8].count = 1;
        clothes[9].count = 1;
        clothes[10].count += data.lowWeatherDays;
        clothes[11].count += data.lowWeatherDays;
    }
    if (data.mediumWeatherDays > 0){
        clothes[11].count += data.mediumWeatherDays;
        clothes[10].count += data.mediumWeatherDays;
        clothes[12].count += 1;
    }
    if (data.highWeatherDays > 0){
        clothes[13].count += data.highWeatherDays;
        clothes[14].count += 1;
        clothes[15].count +=data.highWeatherDays;
    }
    if (data.highUV > 0){
        clothes[16].count = 1;
        clothes[17].count = 1;
    }
    if(location[location.length-2] != 'u' && location[location.length-1] != 's' || from[from.length-2] != 'u' && from[from.length-1] != 's'){
        clothes[30].count = 1;
        clothes[29].count = 0;
    }
    console.log(clothes);
    return clothes;

    
}
export default get_clothes;