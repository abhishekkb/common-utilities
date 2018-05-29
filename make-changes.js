var fs = require('fs');

var json = JSON.parse(fs.readFileSync("Handsets-Listing-Postpaid-98005-response.json"),'utf8');

//products[a].itemDetails[b].price[c].option[d].component[e].xyz

var level0 = json;
var level1 = "products";
var level2 = "itemDetails";
var level3 = "price";
var level4 = "option";
var level5 = "component";
/*
if(level0[level1]){
	var l1 = level0[level1];
	for(var a=0;a<l1.length;a++){
		if(l1[a][level2]){
			var l2 = l1[a][level2];
			for(var b=0; b<l2.length; b++){
				if(l2[b][level3]){
					var l3 = l2[b][level3];
					for(var c=0; c< l3.length; c++){
						if(l3[b][level4]){
							var l4 = l3[b][level4];
							for(var d=0; d< l4.length; d++){
								if(l4[b][level5]){
									var l5 = l4[b][level5];
									for(var e=0; e<l5.length ; e++){
										if(l5[e].withoutService){
											
											//delete withoutService
											delete l5[e].withoutService;
											//delete json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService;
											//console.log(json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService);
											//break;
										}
										if(l5[e].withService){
											delete level5[e].withService;
										}
										if(l5[e].promotion && l5[e].promotion.contractTerm){
											delete l5[e].promotion.contractTerm;
										}

									}
								}
							}
						}
					}
				}
			}
		}
	}
}

*/


//working code
if(json.products){
	var products = json.products;
	for(var a=0;a<products.length;a++){
		if(products[a].itemDetails){
			itemDetails = products[a].itemDetails;
			for(var b=0; b<itemDetails.length; b++){
				if(itemDetails[b].price){
					var price = itemDetails[b].price;
					for(var c=0; c< price.length; c++){
						if(price[c].option){
							var option = price[c].option;
							for(var d=0; d< option.length; d++){
								if(option[d].component){
									var component = option[d].component;
									for(var e=0; e<component.length ; e++){
										if(component[e].withoutService){
											
											//delete withoutService
											delete component[e].withoutService;
											//delete json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService;
											//console.log(json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService);
											//break;
										}
										if(component[e].withService){
											delete component[e].withService;
										}
										if(component[e].promotion && component[e].promotion.contractTerm){
											delete component[e].promotion.contractTerm;
										}

									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/*
if(json.products){
	for(var product in json.products){
		console.log(json.products.length);
		console.log(json.product);
		break;
		if(product.itemDetails){
			for(var itemDetail in product.itemDetails){
				console.log('in itemDetails loop');
				if(itemDetail.price){
					for(var pr in itemDetail.price){
						console.log('in price loop');
						if(pr.option){
							for(var op in option){
								console.log('in option loop');
								if(op.component){
									for(var co in component){
										console.log('in component loop');
										if(co.withoutService){
											
											//delete withoutService
											delete co.withoutService;
											//delete json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService;
											//console.log(json.products[product].itemDetails[itemDetail].price[pr].option[op].component[co].withoutService);
											//break;
										}
										if(co.withService){
											delete co.withService;
										}
										if(co.promotion && co.promotion.contractTerm){
											delete co.promotion.contractTerm;
										}

									}
								}
							}
						}
					}
				}
			}
		}
	}
}
*/

const content = JSON.stringify(json, null, '\t');

fs.writeFile("abc.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
