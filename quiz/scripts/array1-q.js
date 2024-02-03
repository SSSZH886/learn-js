window.onload = function () {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        // we will only allow a term to be entered if the search input isn't empty
        if (inp.value !== '') {
            // empty the list so that we don't display duplicate entries
            // the display is regenerated every time a search term is entered.
            list.innerHTML = '';

            // Add the new search term to the history array
            myHistory.unshift(inp.value);

            // loop through the sorted array, and display all the search terms in the list
            for (let i = 0; i < Math.min(MAX_HISTORY, myHistory.length); i++) {
                const itemText = myHistory[i];
                const li = document.createElement('li');
                li.textContent = itemText;
                list.appendChild(li);
            }

            // If the array length is 5 or more, remove the oldest search term
            if (myHistory.length > MAX_HISTORY) {
                myHistory.pop();
            }

            // empty the search input and focus it, ready for the next term to be entered
            inp.value = '';
            inp.focus();
        }
    }
}