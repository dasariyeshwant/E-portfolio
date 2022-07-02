const introductionTemplate = document.createElement('template');
introductionTemplate.innerHTML = `
    <style>
        .intro {
            position: relative;
        }
        .intro-typing-img {
            width: 7.5rem;
            height: 8rem;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
        }
        .intro-message-container {
            position: relative;
        }
        .intro-message-img {
            width: 100%;
        }
        
        p {
            margin: 0;
            font-size: 0.8rem;
        }
        h2 {
            margin-top: 5px;
            margin-bottom: 0;
            font-weight: 700;
        }
        .text-over {
            position: relative;
            margin: 0;
        }
        .text-over figcaption {
            position: absolute;
            top: 25%;
            padding: 0 8%;
        }
        .intro-message-img-desktop {
            display: none;
        }
        @media only screen and (min-width: 400px) {
            p {
                font-size: 1rem;
            }
            .intro-typing-img {
                width: 8rem;
                height: 9rem;
            }
        }
        @media only screen and (min-width: 480px) {
            p {
                font-size: 1.3rem;
            }
            .intro-typing-img {
                width: 9rem;
                height: 10rem;
            }
        }
        @media only screen and (min-width: 600px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1.6rem;
            }
            .intro-typing-img {
                width: 12rem;
                height: 13rem;
            }
        }
        @media only screen and (min-width: 768px) {
            h2 {
                font-size: 1.3rem;
            }
            p {
                font-size: 1rem;
            }
            .intro-typing-img, .intro-message-img {
                display: none;
            }
            .intro-message-img-desktop {
                display: block;
                width: 100%
            }
            .text-over figcaption {
                left: 50%;
                top: 20%;
            }
        }
        @media only screen and (min-width: 992px) {
            h2 {
                font-size: 1.6rem;
            }
            p {
                font-size: 1.3rem;
            }
        }
        @media only screen and (min-width: 1200px) {
            h2 {
                font-size: 2rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
    </style>
    <div class="intro">
        <img class="intro-typing-img" src="./assets/images/intro-typing-mobile.jpeg"/>
        <div class="intro-message-container">
            <figure class="text-over">
                <img class="intro-message-img" src="./assets/images/intro-message-mobile.jpeg"/>
                <img class="intro-message-img-desktop" src="./assets/images/intro-desktop.jpeg"/>
                <figcaption>
                    <h2>Hello World!</h2>
                    <p>Front-end Developer, Full-Stack developer & mentor. I develop web applications passionately, and I love what I do.</p>
                    <p>Get Ready to turn your ideas into reality!</p>
                </figcaption>
            </figure>
        </div>
    </div>
`
class Introduction extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(introductionTemplate.content.cloneNode(true));
    }
}

customElements.define('intro-section', Introduction, {extends: 'section'});