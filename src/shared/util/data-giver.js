import data from "./sprawnosci-data.json";

export const types_giver = () => {
    const general_data = data
    let general_types = [];
    let isInGeneral = {}

    for(let i = 0; i < general_data.length; i++) {
        if(isInGeneral[general_data[i].typ] !== 1){
            general_types.push(general_data[i].typ);
            isInGeneral[general_data[i].typ] = 1;
        }
    }
    // types = {
    //     Zaradność Życiowa: "",
    // }
    

    return general_types;
}

export const data_giver = (how_many_per_page,page=0) => {
    const general_data = data;
    if(how_many_per_page === -1){
        how_many_per_page = general_data.length;
        page = 1;
    }
    let tasks = [];
    try{
        for(let i = (page-1)*how_many_per_page; i < page*how_many_per_page; i++){
            if(!general_data[i])break;
            tasks.push(general_data[i]);
        }


    }
    catch(e){
        console.log(e)
    }
    return tasks;

}