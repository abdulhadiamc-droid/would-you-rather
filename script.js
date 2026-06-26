const qs=[
"Would you rather fly or be invisible?",
"Would you rather eat only pizza or only burgers for a month?",
"Would you rather travel to the past or the future?",
"Would you rather have a pet dragon or a pet unicorn?",
"Would you rather live on the moon or under the sea?"
];
function nextQ(){document.getElementById('q').textContent=qs[Math.floor(Math.random()*qs.length)];}