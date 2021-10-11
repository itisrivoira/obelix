/**
 * Mostra elenco Locali (da json remoto)
 */
function showLocali() {
    $("#content").empty();
    let locale_row = "";
    let tot = 0;
    $.getJSON(locali_list_json, function(data) {
        $(data).each(function(i) {
            console.log("Locale: " + data[i].nome + ";" + data[i].indirizzo);
            locale_row =    "<a href=\"#\"><div class='locale'>"
                            + "<div class='locale_logo'><img class='locale_img' src=\"./img/restaurant_50.png\"/></div>" 
                            + "<div class='locale_details'>"
                                + "<div class='locale_nome'><h1>" + data[i].nome + "</h1></div>"
                                + "<div class='locale_indirizzo'>" + data[i].indirizzo + "</div>"+ "</div>"
                            + "</div>"  // locale_details
                        + "</div></a><br>";
            $("#content").append(locale_row);
        });
        tot = data.length;
        $("#counter").html("Trovati <b>" + tot + " locali");
    });
}

/**
 * Mostra elenco Cibi (da json remoto), solo sample
 */
function showCibiSample() {
    let cibo_row = "";
    let tot = 0;
    $("#content").empty();
    $.getJSON(cibi_list_json, function(data) {
        $(data).each(function(i) {
            console.log("CIBO: " + data[i].nome + ";" + data[i].prezzo_euro + "€");
            cibo_row =    "<a href=\"#\"><div class='cibo'>"
                            + "<div class='cibo_logo'><img class='cibo_logo' src=\"./img/food-tray_50.png\"/></div>" 
                            + "<div class='cibo_details'>"
                                + "<div class='cibo_nome'><h1>" + data[i].nome + "</h1></div>"
                                + "<div class='cibo_prezzo'>" + data[i].prezzo_euro + "€</div>"+ "</div>"
                            + "</div>"  // cibo_details
                        + "</div></a><br>";
            $("#content").append(cibo_row);
        });
        tot = data.length;
        $("#counter").html("Trovati <b>" + tot + " cibi");
    });
}

/**
 * Mostra elenco Bevande (da json remoto), solo sample
 */
function showBevandeSample() {
    let bevanda_row = "";
    let tot = 0;
    $("#content").empty();
    $.getJSON(bevande_list_json, function(data) {
        $(data).each(function(i) {
            console.log("BEVANDA: " + data[i].nome + ";" + data[i].prezzo_euro + "€");
            bevanda_row =    "<a href=\"#\"><div class='cibo'>"
                            + "<div class='cibo_logo'><img class='cibo_logo' src=\"./img/soda_50.png\"/></div>" 
                            + "<div class='cibo_details'>"
                                + "<div class='cibo_nome'><h1>" + data[i].nome + "</h1></div>"
                                + "<div class='cibo_prezzo'>" + data[i].prezzo_euro + "€</div>"+ "</div>"
                            + "</div>"  // cibo_details
                        + "</div></a><br>";
            $("#content").append(bevanda_row);
        });
        tot = data.length;
        $("#counter").html("Trovate <b>" + tot + " bevande");
    });
}