"use strict"

class App{
	constructor(){
		this.x = [
		{	
			"image": "images/like.jpg",
			"title": "Be a beast on the Court Nothing can stop you!",
			"content": "We will enhance your skill how to be a mamal on the court." 			
		},
		{
			"image": "images/block.jpg",
			"title": "Be the Best deffender on the court",
			"content": "Nothing can leave you behind be the best deffender."
		},
		{	
			"image": "images/rock.jpg",
			"title": "Be A sharp shooter on the court ",
			"content": "You will become a deadly shooter on the court they won't allow you to leave behind."
		},	
			{	
			"image": "images/shoot.jpg",
			"title": "Be A Great Point Guard ",
			"content": "No to score but you can make easy basket to you're Teamates."
		},	
		];

	}


	render(html, component){
		/* Override */
		component.innerHTML += html;
	}

	reRender(html,component){
		component.innerHTML = html;
	} 
	 
	 updateParfait(key){
    let var_title = document.getElementById('updateTitle');
    let var_content = document.getElementById('updateComment');
    let var_availability = document.getElementById('updateAvailability');
    let var_mainPlayer = document.getElementById('updatePlayer');
    let var_cost = document.getElementById('updateCost');

    let parfait = {"image":this.x[key].image,"title":var_title.value,"content":var_content.value,"availability":var_availability.value,"mainPlayer":var_mainPlayer.value,"cost":var_cost.value};
    this.x[key] = parfait;
    this.readParfait();
    component.MoreDetails();
  }


	parfaitUpdateInput(key){
    let html = `
      <div id="meme" class="container">
              <div class="row">
              <div class="col col-md-12">
                <center> <input id="updateTitle" type="text" value="${this.x[key].title}" /></center><br>
                </div>
                <div class="col col-md-12">
                <center><img src="${this.x[key].image}" alt="No image"></center>
                </div>
              </div>
            </div><br><br><br>
              <div class="row">
                <div class="col col-md-5" id="textBox">
                            <br>
                              Comment:<br><input id="updateComment" type="text" value="${this.x[key].content}" /><br><br>
                              Availability time to work:<br><input id="updateAvailability" type="text" value="${this.x[key].availability}" /><br>5000-8000php<br>
                              Main Player:<br><input id="updatePlayer" type="text" value="${this.x[key].mainPlayer}" /><br>Lebron James<br>

                              Price:
                           
                           <input id="updateCost" type="text" value="${this.x[key].cost}" /> 
                            <br><br><br>
                            <center>
                            <a class="btn btn-lg btn-primary" onclick="component.updateParfait(${key})">Done</a></center>  
                      </div>
                      </div>
      `;
      this.reRender(`${html}`,document.getElementById('thisinfo'));
  }

	deleteParfait(key){   
    let table = document.getElementById('thisinfo');


    let x = this.x;
		let dummy = [];
		for(let i=0;i<x.length;i++){
			if(key!=i){
				dummy.push(x[i]);
			}
		}
		this.x = dummy;

    
    this.readParfait();
    component.MoreDetails();
  }

  


	readParfait(){
		let listtable = document.getElementById("x");
		let html = ``;
		for(let i=0;i<this.x.length;i++){
			html += `
			<tr>
				<td>${this.x[i].title}</td>
				<td>${this.x[i].content}</td>
				<td><a href="#" class="btn btn-lg btn-primary" onclick ="component.moreInfo(${[i]})">More Info</a></td> 
			</tr>`;       
		}
		list.innerHTML = html;
	}


	moreInfoDetails(key){
		let parfaitInfo = document.getElementById("thisinfo");
		let html = `
		<section>
            <div id="meme" class="container">
              <div class="row">
              <div class="col col-md-12">
                <center> <h1>${this.x[key].title}</h1></center><br>
                </div>
                <div class="col col-md-12">
                <center><img src="${this.x[key].image}" alt="No image"></center>
                </div>
              </div>
            </div><br><br><br>
              <div class="row">
                <div class="col col-md-5" id="textBox">
                            <p><br>
                              Comment:<br> ${this.x[key].content}<br><br>
                              Availability:<br>${this.x[key].availability}<br><br>
                              Main Player:<br>${this.x[key].mainPlayer}<br><br>

                              Price:<br>${this.x[key].cost} </p>
                            <br><br><br>
                            <center>
                            <a class="btn btn-lg btn-primary" onclick="component.deleteParfait(${key})">Delete</a>
                            <a class="btn btn-lg btn-primary" onclick="component.parfaitUpdateInput(${key})">Update</a>
                            <a class="btn btn-lg btn-primary" onclick="component.MoreDetails()">Back</a></center>  
                      </div>
                      </div>
        </section>
            `;
            this.reRender(`${html}`,document.getElementById("thisinfo"));
	}

	searchParfait(){
		let searching = document.getElementById("searching");
		let listtable = document.getElementById("x");
		let html = ``;
		for(let i=0;i<this.x.length;i++){
			if(this.x[i].title.toLowerCase().includes(searching.value)||this.x[i].content.toLowerCase().includes(searching.value)||this.x[i].title.toUpperCase().includes(searching.value)||this.x[i].content.toUpperCase().includes(searching.value)){
				html += `<tr>
				<td>${this.x[i].title}</td>
				<td>${this.x[i].content}</td>
				<td><a href="#" class="btn btn-lg btn-primary" onclick ="component.moreInfo(${[i]})">More Info</a></td> 
				</tr>`; 
			}
		}
		list.innerHTML = html;
	}


	createParfait(){
		let image = document.getElementById('image');
		let title = document.getElementById('title');
		let content = document.getElementById('content');
		let availability = document.getElementById('availability');
		let mainPlayer = document.getElementById('mainPlayer');
		let cost = document.getElementById('cost');
		let exact = {
			"image": image.value,
			"title": title.value,
			"content": content.value,
			"availability": availability.value,
			"mainPlayer":mainPlayer.value,
			"cost": cost.value,
			};
			this.x.push(exact);  // Add to main array
			console.log(this.x);
			// this.refreshlist(); // refresh list
			image.value = title.value = content.value = availability.value = mainPlayer.value = cost.value ='';
			component.readParfait();
			component.MoreDetails();
	}

}

class Component extends App{
	constructor(){
		super();
	}

	landingPage(){
		let html = `
				<!-- PRELOADER -->
				<div id="preloader">
					<div id="status"></div>
				</div>
				<!--============-->

				<!-- THE BIG CAROUSELL -->
				<header id="home">
					<div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
						<div class="carousel-inner">
							<div class="item active" style="background-image: url(images/slider/1.jpg)">
								<div class="caption">
									<h1 class="animated fadeInLeftBig">Welcome to <span>Basketball Training camp</span></h1>
									<p class="animated fadeInRightBig"></p>
									<a data-scroll class="btn btn-start animated fadeInUpBig" href="#portfolio">train Now</a>
								</div>
							</div>
							<div class="item" style="background-image: url(images/slider/2.jpg)">
								<div class="caption">
									<h1 class="animated fadeInLeftBig"><span>It is not the end of you're basketball career</span></h1>
									<p class="animated fadeInRightBig">The Best training camp <br> It's not the end of you're career It is the begining.</p>
									<a data-scroll class="btn btn-start animated fadeInUpBig" href="#portfolio">Start now</a>
								</div>
							</div>
							<div class="item" style="background-image: url(images/slider/3.jpg)">
								<div class="caption">
									<h1 class="animated fadeInLeftBig"><span>BE A  Part of the Future star</span></h1>
									<p class="animated fadeInRightBig">Basketball camp is willing to accept you.</p>
									<a data-scroll class="btn btn-start animated fadeInUpBig" href="#portfolio">Start now</a>
								</div>
							</div>
						</div>
						<a class="left-control" href="#home-slider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
						<a class="right-control" href="#home-slider" data-slide="next"><i class="fa fa-angle-right"></i></a>
						<a id="tohash" href="#portfolio"><i class="fa fa-angle-down"></i></a>
					</div></header>
				<!--  -->


				<!-- NAVIGATION -->
				<div id ="navigation">
					<div class="main-nav">
						<div class="container">
							
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<a class="navbar-brand" href="index.html">
									<h1><img class="img-responsive" src="images/logo.png" alt="logo"></h1>
								</a>                    
							</div>
							<div class="collapse navbar-collapse">
								<ul class="nav navbar-nav navbar-right">                 
									<li class="scroll active"><a href="#home" onclick="component.home()">Home</a></li>
									<li class="scroll"><a href="#create" onclick="component.MoreDetails()">Trainings</a></li>
									<li class="scroll"><a href="#create" onclick="component.creator()">Additional Practice</a></li>
								</ul> 
							</div>


							</div>
						</div>
				</div>
				<!--  -->


				<!-- PORTFOLIO : PICTURE -->
				<section id="portfolio">
						<br><br><br>	
								<div class="container">
									<div class="row">
										<div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
											<h2>Basketball Trainings</h2>
											<p>Special offer</p>
										</div>
									</div> 
								</div>

								<div class="container-fluid">
								<div class="row">
										<!-- `;
										for(let index=0;index<this.x.length;index++){
										html +=` -->
										<div class="col-sm-3">
											<div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="300ms">
												<div class="folio-image">
													<img class="img-responsive" src="${this.x[index].image}" alt="">
												</div>
												<div class="overlay">
													<div class="overlay-content">
														<div class="overlay-text">
															<div class="folio-info">
																<h3>${this.x[index].title}</h3>
																<p>${this.x[index].content}</p>
															</div>

														</div>
													</div>
												</div>
											</div>
										</div>
								<!-- 		`;
									}
									html+=` -->
								</div>
							</div>

							
				</section>
				<!--=============-->

				<!-- CreateParfait-->
				<section id="creator">
			  		<div class="container">
			          	<div id="add">
			          		<section id="contact" class="container">
			           		<div class="heading text-center col-sm-12  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
			              	<center><h1>Add New Trainings</h1></center></div>
				              <div class="form-group">
				              <section>
				                <p><b>Image</b></p><input  id="image" type="text" class="form-control" placeholder="Enter URL on image..."><br>
				                <p><b>TRaining</b></p><input  id="title" type="text" class="form-control" placeholder="Enter a Training here..."><br>
				                <p><b>Comment</b></p><input  id="content" type="text" class="form-control" placeholder="Enter comment here..."><br>
				                <p><b>What to learn</b></p><input  id="availability" type="text" class="form-control" placeholder="Enter What do you want to learn here..."><br>
				                <p><b>Favorite player</b></p><input  id="mainPlayer" type="text" class="form-control" placeholder="Enter Who is your Idol..."><br>
				                <p><b>Offer</b></p><input  id="cost"  type="text" class="form-control" placeholder="Enter Additional Payment..."><br>
				              </section>
				              </div>
	            			<center><button onclick="component.createParfait()" class="btn btn-lg btn-primary">Add</button></center>
            				</section>
            			
          				</div>
    				</div>
				</section>
				<!--========-->
				
				<!--MORE INFO BUTTON-->
				<section id="moreInfo">
					<div class="container">
						<div id="thisinfo"></div>
					</div>
				</section>
				<!--  -->


				<!-- WHERE THE READ IS LOCATED -->
				<div id="tables">
					<section id="contact" class="container">
						<div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
							<h1>Search for available Trainings</h1>
						</div>
						<form id="main-contact-form" name="contact-form" method="post" action="#">   
							<div class="form-group">
								<input oninput="component.searchParfait()" id="searching" type="text" class="form-control" placeholder="Search for Training...">
							</div>
						</form> 
						</section>

						<section>
							<div class="container">
								<table class="table">
									<thead>
										<tr>
											<th data-field="id"><center>Trainings</center></th>
											<th data-field="name"><center>Comments</center></th>
										</tr>
									</thead>
									<tbody id="list" class=" table-bordered table-hover">  
									</tbody>
								</table>
							</div>
							<br>
							<br>
							<div class="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
								<a href="#" onclick="component.home()" class="btn btn-lg btn-primary">Back</a>
							</div>
						</section>
					</div>
				<!-- ======= -->


				<!-- FOOTER -->
				<footer id="footer">
						<div class="footer-top wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
							<div class="container text-center">
								<div class="footer-logo">
									<a href="index.html"><img class="img-responsive" src="images/logo.png" alt=""></a>
								</div>
								<div class="social-icons">
									<ul>
										<li><a class="envelope" href="#"><i class="fa fa-envelope"></i></a></li>
										<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li> 
										<li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
										<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a class="tumblr" href="#"><i class="fa fa-tumblr-square"></i></a></li>
									</ul>
								</div>
							</div>
						</div></footer>
				<!-- </footer> -->

		`;
		this.reRender(`${html}`,document.getElementById("app"));
		$('#tables').hide();
		$('#thisinfo').hide();
		$('#creator').hide();


	}


	home(){
		$('#home').show();
		$('#portfolio').show();
		$('#tables').hide();
		$('#thisinfo').hide();
		$('#creator').hide();
	}

	MoreDetails(){
		$('#home').hide();
		$('#portfolio').hide(); 
		$('#tables').show(); 
		$('#thisinfo').hide();
		$('#creator').hide();
	}

	creator(){
		$('#home').hide();
		$('#portfolio').hide(); 
		$('#tables').hide(); 
		$('#thisinfo').hide();
		$('#creator').show();
	}

	moreInfo(key){
		$('#home').hide();
		$('#portfolio').hide(); 
		$('#tables').hide();
		$('#thisinfo').show();
		$('#creator').hide();
		component.moreInfoDetails(key);
	}
}

let component = new Component();
component.landingPage();
component.readParfait();