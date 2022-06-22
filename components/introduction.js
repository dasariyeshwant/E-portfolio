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
        .message {
            position: absolute;
            top: 120px;
            left: 0;
            padding: 0 40px;
        }
        p {
            margin: 0;
        }
        h2 {
            margin-top: 5px;
            margin-bottom: 0;
            font-weight: 700;
        }
    </style>
    <div class="intro">
        <img class="intro-typing-img" src="./assets/images/intro-typing-mobile.jpeg"/>
        <div class="intro-message-container">
            <img class="intro-message-img" src="./assets/images/intro-message-mobile.jpeg"/>
            <div class="message">
                <h2>Hello World!</h2>
                <p>Front-end Developer, Full-Stack developer & mentor. I develop web applications passionately, and I love what I do.</p>
                <p>Get Ready to turn your ideas into reality!</p>
            </div>
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