class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const number = this.getAttribute('number') || '';
        const color = this.getColor(number);
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.2), 
                                0 5px 15px rgba(0, 0, 0, 0.3);
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                    background: ${color};
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    animation: appear 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                @keyframes appear {
                    from { transform: scale(0) rotate(-180deg); opacity: 0; }
                    to { transform: scale(1) rotate(0); opacity: 1; }
                }
                :host(:hover) {
                    transform: scale(1.1);
                    z-index: 10;
                }
                div {
                    z-index: 1;
                }
            </style>
            <div>${number}</div>
        `;
    }

    getColor(number) {
        const n = parseInt(number);
        if (n <= 10) return '#fbc400'; // Yellow
        if (n <= 20) return '#69c8f2'; // Blue
        if (n <= 30) return '#ff7272'; // Red
        if (n <= 40) return '#aaaaaa'; // Gray
        return '#b0d840'; // Green
    }
}

customElements.define('lotto-ball', LottoBall);

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    if (!generateBtn || !lottoNumbersContainer) return;

    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const lottoBall = document.createElement('lotto-ball');
                lottoBall.setAttribute('number', number);
                lottoNumbersContainer.appendChild(lottoBall);
            }, index * 150); // Animated sequence
        });
    });
});
