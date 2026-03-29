const sheetStatusUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQj8x-z69HlP4SBEtUFdvMUDvxaqswkUr7gKGU35PM55vQoxni-_q7ERl4XesDLHFiILpOXByDZys0s/pub?gid=1776928980&single=true&output=csv';
const sheetGalleryUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQj8x-z69HlP4SBEtUFdvMUDvxaqswkUr7gKGU35PM55vQoxni-_q7ERl4XesDLHFiILpOXByDZys0s/pub?gid=204827592&single=true&output=csv';
const VIDEO_ID = '8RmZFUxos3E';

let sampleData = {};
let ytPlayer;

async function init() {
    await Promise.all([loadStatusFromCSV(), loadDataFromCSV()]);
}

async function loadStatusFromCSV() {
    try {
        const response = await fetch(sheetStatusUrl + '&t=' + new Date().getTime());
        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(','));
        const status = (rows[1] && rows[1][1]) ? rows[1][1].trim().toUpperCase() : "CLOSED";
        const statusElem = document.getElementById('commission-status');
        if (statusElem) {
            statusElem.innerText = status;
            statusElem.style.color = (status === "OPEN") ? "#5C8042" : "#D64545";
        }
    } catch (e) { console.error(e); }
}

async function loadDataFromCSV() {
    const catView = document.getElementById('sample-category-view');
    catView.innerHTML = `<div id="clover-loader"><i class="fa-solid fa-clover clover-spin"></i><span>Loading...</span></div>`;
    try {
        const response = await fetch(sheetGalleryUrl + '&t=' + new Date().getTime());
        const csvText = await response.text();
        const rows = csvText.split('\n').map(row => row.split(','));
        sampleData = {};
        for (let i = 1; i < rows.length; i++) {
            const type = rows[i][0]?.trim();
            const link = rows[i][1]?.trim();
            if (type && link && link.startsWith("http")) {
                if (!sampleData[type]) sampleData[type] = [];
                sampleData[type].push(link);
            }
        }
        renderCategoryCards();
    } catch (e) { console.error(e); }
}

function renderCategoryCards() {
    const catView = document.getElementById('sample-category-view');
    catView.innerHTML = '';
    Object.keys(sampleData).forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => openGallery(category, category);
        const bgGrid = document.createElement('div');
        bgGrid.className = 'card-bg-grid';
        sampleData[category].slice(0, 4).forEach(url => {
            const thumb = document.createElement('div');
            thumb.className = 'card-thumb';
            thumb.style.backgroundImage = `url('${url}')`;
            bgGrid.appendChild(thumb);
        });
        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';
        const span = document.createElement('span');
        span.innerText = category;
        card.append(bgGrid, overlay, span);
        catView.appendChild(card);
    });
}

function openTab(tabName, btnElement) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    btnElement.classList.add('active');
    if (tabName !== 'sample') closeGallery();
}

function openGallery(categoryKey, title) {
    document.getElementById('main-content-wrapper').classList.add('hidden');
    document.getElementById('sample-gallery-view').classList.add('show');
    document.getElementById('gallery-title').innerText = title;
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    sampleData[categoryKey].forEach((url, i) => {
        const div = document.createElement('div');
        div.className = 'sample-item';
        div.style.animationDelay = `${i * 0.1}s`;
        div.innerHTML = `<img src="${url}" class="lazy-img" loading="lazy"><span class="sample-text">Click to zoom</span>`;
        div.onclick = () => openLightbox(url);
        grid.appendChild(div);
    });
}

function closeGallery() {
    document.getElementById('sample-gallery-view').classList.remove('show');
    document.getElementById('main-content-wrapper').classList.remove('hidden');
}

const lightbox = document.getElementById('lightbox');
const imgWrapper = document.getElementById('lightbox-wrapper');
const img = document.getElementById('lightbox-img');
let scale = 1, panning = false, pointX = 0, pointY = 0, startX = 0, startY = 0;

function updateTransform() {
    img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function openLightbox(url) {
    img.src = url;
    scale = 1; pointX = 0; pointY = 0;
    updateTransform();
    lightbox.classList.add('show');
}

function closeLightbox() { lightbox.classList.remove('show'); }

imgWrapper.onwheel = function (e) {
    e.preventDefault();
    let xs = (e.clientX - pointX) / scale;
    let ys = (e.clientY - pointY) / scale;
    let delta = e.deltaY;
    (delta < 0) ? (scale *= 1.2) : (scale /= 1.2);
    scale = Math.min(Math.max(0.5, scale), 5);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    updateTransform();
};

img.onmousedown = function (e) {
    e.preventDefault();
    startX = e.clientX - pointX;
    startY = e.clientY - pointY;
    panning = true;
};

window.onmouseup = () => { panning = false; };
window.onmousemove = (e) => {
    if (!panning) return;
    e.preventDefault();
    pointX = (e.clientX - startX);
    pointY = (e.clientY - startY);
    updateTransform();
};

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('yt-hidden-player', {
        height: '0', width: '0', videoId: VIDEO_ID,
        playerVars: { 'autoplay': 0, 'loop': 1, 'playlist': VIDEO_ID }
    });
    document.getElementById('yt-cover').src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
}

function toggleWidget() {
    const musicWidget = document.getElementById('yt-music-widget');
    const arrow = document.getElementById('widget-arrow');
    musicWidget.classList.toggle('open');
    if (musicWidget.classList.contains('open')) {
        arrow.classList.replace('fa-chevron-right', 'fa-chevron-left');
    } else {
        arrow.classList.replace('fa-chevron-left', 'fa-chevron-right');
    }
}

function controlMusic(play) {
    if (!ytPlayer) return;
    const vinyl = document.getElementById('vinyl');
    if (play) { ytPlayer.playVideo(); vinyl.style.animationPlayState = 'running'; }
    else { ytPlayer.pauseVideo(); vinyl.style.animationPlayState = 'paused'; }
}

(function() {
    const s = document.createElement('script');
    s.src = "https://cdn.jsdelivr.net/gh/adryd325/oneko.js@master/oneko.js";
    document.body.appendChild(s);
})();

window.addEventListener('DOMContentLoaded', init);