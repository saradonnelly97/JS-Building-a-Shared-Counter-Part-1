function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    async function getWebpage() { 
        let response = await fetch('http://127.0.0.1:9000/')
        console.log(response)
        }

    let countValue = 0;
    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);


    countContainer.textContent = countValue;
}
main()
