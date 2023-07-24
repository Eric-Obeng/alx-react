const $ = required('jquery');
const _ = required('lodash');

$("<div id='logo'> </div>").appendTo('body');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

let counter = 0;

function updateCounter() {
    counter++;
    $('#count').html(`${counter} click on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));