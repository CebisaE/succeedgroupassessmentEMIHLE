
function readAbout(about){
document.querySelector('#about').innerHTML += `
    <div class="col-4">
            <div class="about">
                <div class="bio">
                    <h1 class="info">We are here to help</h1>
                    <h1 class="info">you with</h1>
                </div>
                    <div class="card">
                        <div class="card-body">
                            <h3><box-icon name='shape-circle' animation='spin' rotate='90' color='#1fbab7' size='md'></box-icon>UI & UX Design</h3>
                            <p class="description">A complete about-face in its core economy Amsterdams</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h3><box-icon name='collapse' animation='spin' rotate='90' color='#1fbab7' ></box-icon>React & Vue JS</h3>
                            <p class="description">Amsterdams progressive multicultural conscientious</p>
                        </div>
                    </div>
            </div>
    </div>
                <div class="col-8">
                    <div class="img">
                        <img class="pic2" src="./images/expense.png">
                        <img class="pic1" src="./images/transactions.png">
                    </div>
                </div> 
`;
};

readAbout(about);

function readFeatures(features){
document.querySelector("#features").innerHTML +=`
<div class="containers">
<div class="feature">
<div class="row">
<div class="col-5">
<div class="pic">
    <img class="android" src="./images/phone.png">
    </div>
    </div>
<div class="col-7">
    <div class="page">
    <h5 class="fea">FEATURES</h5>
    <h2>Web Development</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet earum nisi nihil pariatur quasi recusandae, 
        perspiciatis officiis saepe adipisci aperiam consequuntur</p>
        <div class="row g-6">
        <div class="col-6">
        <div class="card">
            <div class="card-body">
            <box-icon name='expand'></box-icon>
                </div>
            <h3>UI & UX Design</h3>
            <p>A complete about-face in its core economy Amsterdams</p>
            
        </div>  
        </div>
        <div class="col-6">
        <div class="card">
            <div class="card-body">
            <box-icon name='shape-circle'></box-icon>
            </div>
            <h3>React & Vue JS</h3>
            <p>Amsterdams progressive multicultural conscientious</p>
            </div>
            </div>
        </div> 
        </div>
        </div> 
        </div>
      
            </div>
</div>
</div>
`;
};
readFeatures(features);

function readFaq(faq){
    document.querySelector("#faq").innerHTML += `
    <div class="containers">
    <div class="row">
    <div class="col-6">
    <div class="faqs">
        <h5 class="fea">FAQ</h5>
        <h2>Frequently Asked Question</h2>
    </div>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            You  might remember the Dell computer ?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            We would be pleased to learn more about you,your organisation and your goals. please give us a clall or drop us an email."They were always".
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            An effective FAQ resource can educate ?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Turpis tincidunt id aliquet risus feugiat. Tempus iaculis urna id volutpat.
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        it is text heavy,blocked into key topic ?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Turpis tincidunt id aliquet risus feugiat. Tempus iaculis urna id volutpat.
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="col-6">
    <img src="./images/person.png">
    </div>
    </div>
</div>

    `;
};
readFaq(faq);

function readContact(contact){
    document.querySelector("#contact").innerHTML += `
<div class="containers">
    <div class="con">
    <h5 class="fea">EMAIL</h5>
    <h2>Contact us</h2>
</div>
<div class="form-floating mb-3">
    <input type="name" class="form-control" id="floatingInput" placeholder="Enter your full name">
    <label for="floatingInput">Enter your full name</label>
</div>
<div class="form-floating">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput"> Enter your email address</label>
</div>
<div class="mb-3">
    <label for="formFile" class="form-label">Your Budget</label>
    <input class="form-control" type="file" id="formFile">
</div>
<button type="button" class="btn btn-success">Send</i></button>

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

