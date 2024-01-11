//Communicate with script window
var channel = new BroadcastChannel('popup_channel');

// Existing functions
function hideIncomeScript() {
    channel.postMessage('hide');
}

function showIncomeScript() {
    channel.postMessage('show');
}

// Add event listener for beforeunload
window.addEventListener('beforeunload', function() {
    channel.postMessage('close');
});