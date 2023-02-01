
document.getElementById('p_1');
// document.getElementById('p_1').innerText = 'привет';
// document.getElementById('p_1').style.color = 'red';
// document.getElementById('p_1').style.fontSize = '30px';

document.getElementById('btn_1').addEventListener('click', onClickButton);

function onClickButton() {
    // document.getElementById('p_1').style.rotate = '360deg'
    // document.getElementById('p_1').style.border = '10px solid green'
    // console.dir(document.getElementById('p_1'));
    // document.getElementById('p_1').style.display = "none";
    // document.getElementById('p_1').classList.add('styleParagraph');
    document.getElementById('p_1').classList.toggle('d_none');
}