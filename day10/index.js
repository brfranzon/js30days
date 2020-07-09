// select all check boxex
const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
    // check if the shift key is down AND
    // check that they are checkinm it

    let inBetween = false;
    if (e.shiftKey && this.checked) {

        // loop over all checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox);

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            };

            if (inBetween) {
                checkbox.checked = true;
            };
        });
    };

    lastChecked = this;
};




checkboxes.forEach(
    function (checkbox) {
        checkbox.addEventListener('click', handleCheck);
    }
);

