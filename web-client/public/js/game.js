//game.js

$(function() {
	var httpGet = function(theUrl) {
		    var xmlHttp = null;

		    xmlHttp = new XMLHttpRequest();
		    xmlHttp.open( "GET", theUrl, false );
		    xmlHttp.send( null );
		    return xmlHttp.responseText;
		},
		products = jQuery.parseJSON(httpGet("http://localhost:3000/products")),
		testImages = [
			"http://thementalshift.com/images/Products2.jpg",
			"http://img4-3.myrecipes.timeinc.net/i/recipes/ck/11/05/peach-chicken-pizza-ck-l.jpg",
			"http://droneflyers.com/wp-content/uploads/2011/12/ar_drone_2.jpg",
			"http://www.thenoisecast.com/wp-content/uploads/2011/02/shake-weight.png",
			"http://cdn.cultofmac.com/wp-content/uploads/2011/02/macbook-pro-with-bad-credit.jpg",
			"http://www.whatlaptop.co.uk/files/2012/07/Windows-8-tut-cover.jpg",
			"http://fc03.deviantart.net/fs70/f/2010/015/a/1/Charizard_v_2_by_Xous54.png",
			"http://info.roosterbank.com/blog/wp-content/uploads/2012/10/Furby2012Purple.jpg",
			"http://media-cerulean.cursecdn.com/attachments/5/860/mega_venusaur.png",
			"http://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/4/4a/Blastoise.gif",
			"http://www.asianweek.com/wp-content/uploads/2012/08/ping_pong_paddle.jpg",
			"http://olympicdistancetriathlons.com/wp-content/uploads/2012/06/CarbonFiberTriathlonBike.jpg"
		],
		createChuzOff = function(products) {
			product1Index = Math.floor(Math.random()*products.length);
			product2Index = Math.floor(Math.random()*(products.length - 1));

			if(product2Index >= product1Index) {
				product2Index++;
			}

			$("#productImgLeft")
				.attr("src", "")
				.attr("src", products[product1Index].imageLink);
			$("#leftTitle").text(products[product1Index].name);

			$("#productImgRight")
				.attr("src", "")
				.attr("src", products[product2Index].imageLink);
			$("#rightTitle").text(products[product2Index].name);
		},
		updateStandings = function(products) {
			$("#standings")
				.empty()
				.append($("<tr></tr>")
					.append($("<th></th>").text("Product"))
					.append($("<th></th>").text("Chuz Offs"))
					.append($("<th></th>").text("Chuz Off Wins"))
					.append($("<th></th>").text("Winning Percent"))
				);

			products.sort(function(a, b) {
				return b.winPercent-a.winPercent;
			}).forEach(function(product) {
				$("#standings")
					.append($("<tr></tr>")
						.append($("<td></td>").text(product.name))
						.append($("<td></td>").text(product.chuzOffs))
						.append($("<td></td>").text(product.chuzOffWins))
						.append($("<td></td>").text(product.winPercent))
					);
			});
		},
		product1Index = Math.floor(Math.random()*products.length),
		product2Index = Math.floor(Math.random()*products.length - 1);

	if(product2Index >= product1Index) {
		product2Index++;
	}

	console.log(products);

	//the product image links dont acutally work right now so insert fake ones
	products.forEach(function(product, i) {
		product.imageLink = testImages[i%testImages.length];
		product.chuzOffs = 0;
		product.chuzOffWins = 0;
		product.winPercent = 0;
	});


	$("#productImgLeft")
		.attr("src", "")
		.attr("src", products[product1Index].imageLink);
	$("#leftTitle").text(products[product1Index].name);

	$("#productImgRight")
		.attr("src", "")
		.attr("src", products[product2Index].imageLink);
	$("#rightTitle").text(products[product2Index].name);


	$(".highlight").click(function() {
		products[product1Index].chuzOffs++;
		products[product2Index].chuzOffs++;

		if($(this).attr("id") === "leftHighlight") {
			products[product1Index].chuzOffWins++;
		} else {
			products[product2Index].chuzOffWins++;			
		}

		products[product1Index].winPercent = Math.floor(10000*products[product1Index].chuzOffWins/products[product1Index].chuzOffs)/100;
		products[product2Index].winPercent = Math.floor(10000*products[product2Index].chuzOffWins/products[product2Index].chuzOffs)/100;
		updateStandings(products);
		createChuzOff(products);
	});
})