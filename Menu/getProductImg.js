export default function getProductImg() {
    const productImgs = {
        entrees: {
            mainDishes: {
                blackPepperBeef: "./img/entreeImgs/black-pepper-beef.jpg",
                blackPepperChicken: "./img/entreeImgs/black-pepper-chicken.jpg",
                guiYakiniku: "./img/entreeImgs/gui-yakiniku.jpg",
                mitoboru: "./img/entreeImgs/mitoboru.jpg",
                ribeye: "./img/entreeImgs/ribeye.jpg",
                tandooriSteak: "./img/entreeImgs/tandoori-steak.jpg"
            },
            fish: {
                blackCod: "./img/fishImgs/black-cod.jpg",
                gomaMaguro: "./img/fishImgs/goma-maguro.jpg",
                robataSuzuki: "./img/fishImgs/robata-style-suzuki.jpg",
                salmonTeriyaki: "./img/fishImgs/salmon-teriyaki.jpg"

            },
            rice: {
                toriMeshi: "./img/riceImgs/tori-meshi.jpg",
                umiNoSachi: "./img/riceImgs/umi-no-sachi.jpg",
                yasaiYakiMeshi: "./img/riceImgs/yasai-yaki-meshi.jpg"
            },
            salads: {
                ceasarSalad: "./img/saladsImgs/ceasar-salad.jpg",
                ichiban: "./img/saladsImgs/ichiban.jpg",
                ichibanWithSquid: "./img/saladsImgs/ichiban-with-spicy-squid.jpg",
                nasuSalad: "./img/saladsImgs/nasu-salad.jpg",
            }
        },
        sushi: {
            combo: {
                chefsCombo: "./img/sushiImgs/sushiCombo/chefs-combo.jpg",
                fusionCombo: "./img/sushiImgs/sushiCombo/fusion-combo.jpg",
                nigiriCombo: "./img/sushiImgs/sushiCombo/nigiri-combo.jpg",
                sashimiCombo: "./img/sushiImgs/sushiCombo/sashimi-combo.jpg",

            },
            nigiri: {
                nigiriSakei: "./img/sushiImgs/nigiri/nigiri-sakei-taki.jpg",
                nigiriToro: "./img/sushiImgs/nigiri/nigiri-sake-toro.jpg",
                nigiriSalmon: "./img/sushiImgs/nigiri/nigiri-salmon.jpg",
                nigiriUnagi: "./img/sushiImgs/nigiri/nigiri-unagi.jpg"
            },
            sashimi: {
                newStyleSalmon: "./img/sushiImgs/sashimi/new-style-salmon-sashimi.jpg",
                sashimiSalmon: "./img/sushiImgs/sashimi/sashimi-salmon.jpg",
                sashimiTuna: "./img/sushiImgs/sashimi/sashimi-tuna.jpg"
            }
        },
        drinks:{
            sodas:{
                coke:"./img/drinks/softDrinks/coke-330.jpg",
                cokeZero:"./img/drinks/softDrinks/coke-zero.jpg",
                fanta:"./img/drinks/softDrinks/fanta-330.jpg",
                sprite:"./img/drinks/softDrinks/sprite-330.jpg"
            },
            beers:{
                heineken:"./img/drinks/beers/heineken.jpg",
                desperados:"./img/drinks/beers/desperados.jpg",
                zagorka:"./img/drinks/beers/zagorka.jpeg"
            },
            wines:{
                châteauLafiteRothschild:"./img/drinks/wines/ChâteauLafiteRothschild.jpg",
                penfolds:"./img/drinks/wines/penfolds.jpg"
            }
        }

    }

    return productImgs;
}