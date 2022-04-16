export default function getProductImg() {
    const productImgs = {
        entrees: {
            mainDishes: {
                blackPepperBeef: "../Menu/img/entreeImgs/black-pepper-beef.jpg",
                blackPepperChicken: "../Menu/img/entreeImgs/black-pepper-chicken.jpg",
                guiYakiniku: "../Menu/img/entreeImgs/gui-yakiniku.jpg",
                mitoboru: "../Menu/img/entreeImgs/mitoboru.jpg",
                ribeye: "../Menu/img/entreeImgs/ribeye.jpg",
                tandooriSteak: "../Menu/img/entreeImgs/tandoori-steak.jpg"
            },
            fish: {
                blackCod: "../Menu/img/fishImgs/black-cod.jpg",
                gomaMaguro: "../Menu/img/fishImgs/goma-maguro.jpg",
                robataSuzuki: "../Menu/img/fishImgs/robata-style-suzuki.jpg",
                salmonTeriyaki: "../Menu/img/fishImgs/salmon-teriyaki.jpg"

            },
            rice: {
                toriMeshi: "../Menu/img/riceImgs/tori-meshi.jpg",
                umiNoSachi: "../Menu/img/riceImgs/umi-no-sachi.jpg",
                yasaiYakiMeshi: "../Menu/img/riceImgs/yasai-yaki-meshi.jpg"
            },
            salads: {
                ceasarSalad: "../Menu/img/saladsImgs/ceasar-salad.jpg",
                ichiban: "../Menu/img/saladsImgs/ichiban.jpg",
                ichibanWithSquid: "../Menu/img/saladsImgs/ichiban-with-spicy-squid.jpg",
                nasuSalad: "../Menu/img/saladsImgs/nasu-salad.jpg",
            }
        },
        sushi: {
            combo: {
                chefsCombo: "../Menu/img/sushiImgs/sushiCombo/chefs-combo.jpg",
                fusionCombo: "../Menu/img/sushiImgs/sushiCombo/fusion-combo.jpg",
                nigiriCombo: "../Menu/img/sushiImgs/sushiCombo/nigiri-combo.jpg",
                sashimiCombo: "../Menu/img/sushiImgs/sushiCombo/sashimi-combo.jpg",

            },
            nigiri: {
                nigiriSakei: "../Menu/img/sushiImgs/nigiri/nigiri-sakei-taki.jpg",
                nigiriToro: "../Menu/img/sushiImgs/nigiri/nigiri-sake-toro.jpg",
                nigiriSalmon: "../Menu/img/sushiImgs/nigiri/nigiri-salmon.jpg",
                nigiriUnagi: "../Menu/img/sushiImgs/nigiri/nigiri-unagi.jpg"
            },
            sashimi: {
                newStyleSalmon: "../Menu/img/sushiImgs/sashimi/new-style-salmon-sashimi.jpg",
                sashimiSalmon: "../Menu/img/sushiImgs/sashimi/sashimi-salmon.jpg",
                sashimiTuna: "../Menu/img/sushiImgs/sashimi/sashimi-tuna.jpg"
            }
        },
        drinks:{
            sodas:{
                coke:"../Menu/img/drinks/softDrinks/coke-330.jpg",
                cokeZero:"../Menu/img/drinks/softDrinks/coke-zero.jpg",
                fanta:"../Menu/img/drinks/softDrinks/fanta-330.jpg",
                sprite:"../Menu/img/drinks/softDrinks/sprite-330.jpg"
            },
            beers:{
                heineken:"../Menu/img/drinks/beers/heineken.jpg",
                desperados:"../Menu/img/drinks/beers/desperados.jpg",
                zagorka:"../Menu/img/drinks/beers/zagorka.jpeg"
            },
            wines:{
                châteauLafiteRothschild:"../Menu/img/drinks/wines/ChâteauLafiteRothschild.jpg",
                penfolds:"../Menu/img/drinks/wines/penfolds.jpg"
            }
        }

    }

    return productImgs;
}