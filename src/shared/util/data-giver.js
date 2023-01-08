import data from "./sprawnosci-data.json";

export const types_giver = () => {
    const general_data = data
    let general_types = {};
    let isInGeneral = {}

    for(let i = 0; i < general_data.length; i++) {
        if(isInGeneral[general_data[i].typ] !== 1){
            general_types[general_data[i].typ] ="";
            isInGeneral[general_data[i].typ] = 1;
        }
    }

    // types = {
    //     Artystyczne: "",
    //     Jeździeckie: "",
    //     Komputery i Informatyka: "",
    //     Lotnicze: "",
    //     Naukowe: "",
    //     Przyroda: "",
    //     Rozwój Pasji i Specjlaności: "",
    //     Sportowe: "",
    //     Społeczne i Religijne: "",
    //     Terenoznawstwo i Turystyka: "",
    //     Wodne: "",
    //     Wychowanie Gospodarcze i Ekonomiczne: "",
    //     Wyrobienie Harcerskie: "",
    //     Zaradność Życiowa: "",
    //     Zdrowie: "",
    // }
    

    return general_types;
}