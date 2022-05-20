function readLanding(landing){
        document.querySelector("#landing").innerHTML += `
        
<div class="row">
    <div class="col-10">
        <div class="home">
            <div class="landing">
            <h1 class="landings">Digital Design </h1>
            <h1 class="landings">Studio</h1></h1>
            <div class="btn">
            <button type="button" class="btn btn-success">See Works<i class="bi bi-arrow-right-circle"></i></button>
            </div>
            </div>
        </div>
        </div>
        <div class="col-2">
            <h5>EXPLORE MORE</h5>
        </div>
    </div>

        `;
};
readLanding(landing);

function readAbout(about){
document.querySelector('#about').innerHTML += `
    <div class="container">
            <div class="about">
                <div class="bio">
                <h1 class="info">dfghjkmnbvcghjdsfgmnbhgfghj</h1>
                <h1 class="info">dfghjklkjhgfgd</h1>
                </div>
                    <div class="card">
                        <div class="card-body">
                        <h3><i class="fa-thin fa-draw-circle"></i>dfghjhgfsdfghjkjhgf</h3>
                        <p>sdfgkjhgfdfghjhgfgfdfghg</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                        <h3><i class="fa-thin fa-draw-circle"></i>dfghjhgfsdfghjkjhgf</h3>
                        <p>sdfgkjhgfdfghjhgfgfdfghg</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="./images/transactions.png">
                        <img src="./images/expense.png">
                    </div>
            </div>
    </div>
`;
};

readAbout(about);

function readFeatures(features){
document.querySelector("#features").innerHTML +=`
<div class="container">
<div class="feature">
    <div class="page">
    <h5 class="fea">ftyhgf</h5>
    <h3>wertygfdsdfghjhgfd</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet earum nisi nihil pariatur quasi recusandae, 
        perspiciatis officiis saepe adipisci aperiam consequuntur</p>
        <div class="card">
            <div class="card-body">
                <i class="fa-thin fa-draw-circle"></i>
            <h3>dfghjhgfsdfghjkjhgf</h3>
            <p>sdfgkjhgfdfghjhgfgfdfghg</p>
            </div>
        </div>  
        <div class="card">
            <div class="card-body">
            <box-icon name='shape-circle'></box-icon>
            <h3>dfghjhgfsdfghjkjhgf</h3>
            <p>sdfgkjhgfdfghjhgfgfdfghg</p>
            </div>
        </div> 
        </div> 
        <div class="pic">
            <img src="./images/phone.png">
            </div>
</div>
</div>
`;
};
readFeatures(features);

function readFaq(faq){
    document.querySelector("#faq").innerHTML += `
    <div class="container">
    <div class="faqs">
        <h5 class="fea">rtyujhgertyuhg</h5>
        <h2>sfghjkjhgfddfghj,mnbvcxfghjhgfdtyhvfghjhg</h2>
    </div>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
    </div>
    <img src="./images/person.png">
</div>

    `;
};
readFaq(faq);

function readContact(contact){
    document.querySelector("#contact").innerHTML += `
<div class="container">
    <div class="con">
    <h5 class="fea">rtyujhgertyuhg</h5>
    <h2>sfghjkjhgfddfghj</h2>
</div>
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
</div>
<div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
</div>
<div class="logo">
    <img src="./images/scania-logo-vector-download-free-11574208017dz1swx5qgt.png">
    <img src="./images/images.png">
    <img src="./images/logo-hirez.webp">
    <img src="./images/videotelephony-company-appear-in-c-o-telenor-digital-as-web-browser-png-favpng-DhhaT7Dz1zsdcxxfTbJaE4w4K.jpg">
    </div>
</div>
`;
};
readContact(contact);

