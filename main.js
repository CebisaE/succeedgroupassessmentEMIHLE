function readLanding(landing){
        document.querySelector("#landing").innerHTML += `
        <div class="container">
<div class="row">
    <div class="col-10">
        <div class="home">
            <div class="landing">
            <h1 class="landings">dfghjkmnbvcghjdsfgmnbhgfghj</h1>
            <h1 class="landings">dfghjklkjhgfgd</h1>
            <button type="button" class="btn btn-success">Success<i class="bi bi-arrow-right-circle"></i></button>
            </div>
        </div>
        </div>
        <div class="col-2">
            <h1>dfghnbvcx</h1>
        </div>
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
    <img src="./images/phone.png">
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
                <i class="fa-thin fa-draw-circle"></i>
            <h3>dfghjhgfsdfghjkjhgf</h3>
            <p>sdfgkjhgfdfghjhgfgfdfghg</p>
            </div>
        </div>  
</div>
</div>
`;
};
readFeatures(features);

