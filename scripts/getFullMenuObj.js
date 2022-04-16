import getProductImg from "./getProductImg.js"
import createProductElement from "./createProductElement.js"

export default function getFullMenuObj() {
    const productImgs = getProductImg();
    const entrees = {
        main_dishes: {
            blackPepperBeef:
                createProductElement("black pepper beef", productImgs.entrees.mainDishes.blackPepperBeef, "Beef meat, green pepper, red pepper, carrot, onion, an egg, rice, Black pepper sauce", 18.99),
            blackPepperChicken:
                createProductElement("black pepper chicken", productImgs.entrees.mainDishes.blackPepperChicken, "Chicken meat, green pepper, red pepper, carrot, onion, an egg, rice, Black pepper sauce", 13.99),
            guiYakiniku:
                createProductElement("GUI YTAKINIKU", productImgs.entrees.mainDishes.guiYakiniku, "Beef with japanese barbeque sauce,sesame seeds and potato puree with truffle", 16.99),
            mitoboru:
                createProductElement("mitoboru", productImgs.entrees.mainDishes.mitoboru, "Beef, batatas puree, pickled cucumber, sauce barbecue", 14.99),
            ribeye:
                createProductElement("ribeye", productImgs.entrees.mainDishes.ribeye, "Black Angus steak, wasabi butter, garlic chips", 30.99),
            tandooriSteak:
                createProductElement("tandoori Steak", productImgs.entrees.mainDishes.tandooriSteak, "Marinated turkey breast, edamame, avocado mousse, sweet potato mousse", 15.99)
        },
        rice: {
            toriMeshi:
                createProductElement("tori meshi", productImgs.entrees.rice.toriMeshi, "Japanese rice with chicken, mushrooms, vegetables and an egg", 11.99),
            umiNoSachi:
                createProductElement("umi no sachi", productImgs.entrees.rice.umiNoSachi, "Japanese rice with seafood, mushrooms and an egg", 13.99),
            yasaiYakiMeshi:
                createProductElement("yasai yaki meshi", productImgs.entrees.rice.yasaiYakiMeshi, "Japanese rice with vegetables, mushrooms and an egg", 9.99)
        },
        salads: {
            ceasarSalad:
                createProductElement("ceasar salad", productImgs.entrees.salads.ceasarSalad, "Chicken, salad mix, anchovies, Ceasar sauce, crispy parmesan.", 13.99),
            ichiban:
                createProductElement("ichiban", productImgs.entrees.salads.ichiban, "White cheese, fresh salad leaves, tomatoes, cucumbers, parsley, red onion.", 8.99),
            ichibanWithSquid:
                createProductElement("ichiban with spicy squid", productImgs.entrees.salads.ichibanWithSquid, "Crispy squids, fresh salad leaves, tomatoes, cucumbers, parsley, red onion.", 13.99),
            nasuSalad:
                createProductElement("nasu salad", productImgs.entrees.salads.nasuSalad, "Tomatoes, avocado, marinated eggplant, chives, Japanese dressing.", 10.99)
        },
        fish: {
            blackCod:
                createProductElement("black cod", productImgs.entrees.fish.blackCod, "With spicy miso sauce", 59.99),
            gomaMaguro:
                createProductElement("goma maguro", productImgs.entrees.fish.gomaMaguro, "Tune fillet, sesame mix, home made spicy pickles, yuzu salsa with kinoa", 28.99),
            robataSuzuki:
                createProductElement("robata style suzuki", productImgs.entrees.fish.robataSuzuki, "Sea bass fillet with negi miso crust and batatas mousse", 27.99),
            salmonTeriyaki:
                createProductElement("salmon teriyaki", productImgs.entrees.fish.salmonTeriyaki, "Salmon teriyaki with mousse of sweet potato", 24.99)
        },
    };
    const sushi = {
        combo: {
            chefsCombo:
                createProductElement("chef's combo", productImgs.sushi.combo.chefsCombo, "Crispi salmon roll x 4, snow roll x 4, baroque x 4, summer roll x 4", 46.99),
            fusionCombo:
                createProductElement("fusion combo 16 pcs", productImgs.sushi.combo.fusionCombo, "Crispi salmon roll x 8, philadelphia salmon x 4, norwegian forest x 4", 24.99),
            nigiriCombo:
                createProductElement("nigiri combo", productImgs.sushi.combo.nigiriCombo, "Nigiri salmon x 2, nigiri sake toro x 4, nigiri sea bass x 2, nigiri eel x 2, nigiri shrimp x 2, nigiri tuna x 2, gunkan spicy tuna x 1", 42.99),
            sashimiCombo:
                createProductElement("chef's combo", productImgs.sushi.combo.sashimiCombo, "Sashimi salmon x 8, sashimi tuna x 8, new style salmon sashimi x 8", 49.99)
        },
        nigiri: {
            nigiriSakei:
                createProductElement("nigiri sakei taki", productImgs.sushi.nigiri.nigiriSakei, "Salmon, Dynamite sauce", 6.99),
            nigiriToro:
                createProductElement("nigiri sake toro", productImgs.sushi.nigiri.nigiriToro, "Salmon, Ikura sauce, togarashi", 6.99),
            nigiriSalmon:
                createProductElement("nigiri salmon", productImgs.sushi.nigiri.nigiriSalmon, "Salmo fillet", 6.99),
            nigiriUnagi:
                createProductElement("nigiri sakei taki", productImgs.sushi.nigiri.nigiriUnagi, "Unagi eel, nori seaweed", 7.99)
        },
        sashimi: {
            newStyleSalmon:
                createProductElement("new style salmon sashimi", productImgs.sushi.sashimi.newStyleSalmon, "Salmon, yuzu-wasabi sauce, arugula, truffle.", 15.99),
            sashimiSalmon:
                createProductElement("sashimi salmon", productImgs.sushi.sashimi.sashimiSalmon, "Salmon fillet slices.", 12.99),
            sashimiTuna:
                createProductElement("sashimi tuna", productImgs.sushi.sashimi.sashimiTuna, "Tuna fillet slices.", 12.99)
        }
    }
    const drinks = {
        sodas: {
            coke:
                createProductElement("coca-cola 330ml", productImgs.drinks.sodas.coke, "Coca-cola original 0.330l", 1.99),
            cokeZero:
                createProductElement("coca-cola zero 330ml", productImgs.drinks.sodas.cokeZero, "Coca-cola Zero 0.330l", 1.99),
            fanta:
                createProductElement("fanta 330ml", productImgs.drinks.sodas.fanta, "fanta orange/lime 0.330l", 1.99),
            sprite:
                createProductElement("sprite 330ml", productImgs.drinks.sodas.sprite, "sprite 0.330l", 1.99)

        },
        beers: {
            heineken:
                createProductElement("heineken 0.500ml", productImgs.drinks.beers.heineken, "Heineken 0.500l", 3.99),
            desperados:
                createProductElement("desperados 0.330ml", productImgs.drinks.beers.desperados, "Desperados 0.330", 5.99),
            zagorka:
                createProductElement("Zagorka 0.500ml", productImgs.drinks.beers.zagorka, "Zagorka 0.500l", 4.99)
        },
        wines: {
            châteauLafiteRothschild:
                createProductElement("Château Lafite Rothschild 70cl, France", productImgs.drinks.wines.châteauLafiteRothschild, "Château Lafite Rothschild 2005", 44.99),
            penfolds:
                createProductElement("penfolds 70cl, australia", productImgs.drinks.wines.penfolds, "penfolds", 33.99)
        }
    }
    return { entrees, sushi, drinks };
}