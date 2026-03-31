const CSV_DASHBOARD = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDYdaWJwBGtGkJs1hLKFD2MjFz8lwEvn5wFX287GXQEfjLVh7l6OcXHocjyArgmaEusH1iKyTsaS_X/pub?gid=1776928980&single=true&output=csv';
const CSV_DATABASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDYdaWJwBGtGkJs1hLKFD2MjFz8lwEvn5wFX287GXQEfjLVh7l6OcXHocjyArgmaEusH1iKyTsaS_X/pub?gid=204827592&single=true&output=csv';
const CSV_SETTING = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDYdaWJwBGtGkJs1hLKFD2MjFz8lwEvn5wFX287GXQEfjLVh7l6OcXHocjyArgmaEusH1iKyTsaS_X/pub?gid=769885246&single=true&output=csv'; 

// Đã xóa khoảng trắng thừa ở cuối URL
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxtrD8LEUcGcX3VZd2eV2i-BTeJ7V8rjsdKSLn-sJl7YaOl3SVE24xojvw845Tr3brC/exec'; 

const HASHED_PASS = '81dc9bdb52d04dc20036dbd8313ed055'; 

let sampleData = {};
let ytPlayer;
let ytInterval;
let currentYTId = '';
let savedPass = '';
let isPlaying = false; 

// Hàm mở Web và Tự động phát nhạc
let okClicked = false; 

// Sửa lại hàm enterSite
function enterSite() {
    const modal = document.getElementById('welcome-modal');
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);

    okClicked = true;

    // Bật nhạc ngay khi bấm OK nếu player đã tải xong
    // (Giao diện đĩa nhạc/nút play sẽ tự động cập nhật qua hàm onPlayerStateChange)
    if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
        ytPlayer.playVideo();
    }
}

// Logic cho nút Báo Cáo
function openReportModal() {
    const modal = document.getElementById('report-modal');
    modal.style.display = 'flex';
}

function closeReportModal() {
    const modal = document.getElementById('report-modal');
    modal.style.display = 'none';
}

function getDirectImageUrl(url) {
    if (!url) return '';
    let fileId = '';
    if (url.includes('drive.google.com/uc?export=view&id=')) {
        fileId = url.split('id=')[1].split('&')[0];
    } else if (url.includes('drive.google.com/file/d/')) {
        fileId = url.split('/file/d/')[1].split('/')[0];
    }
    if (fileId) return `https://drive.google.com/uc?export=view&id=${fileId}`;
    return url; 
}

async function init() {
    const catView = document.getElementById('sample-category-view');
    catView.innerHTML = `<div id="clover-loader"><i class="fa-solid fa-clover clover-spin"></i><span>Loading Data...</span></div>`;
    
    try {
        const dashRes = await fetch(CSV_DASHBOARD + '&t=' + new Date().getTime());
        const dashText = await dashRes.text();
        const dashRows = dashText.split('\n').map(row => row.split(','));
        
        let status = "CLOSED";
        let ytId = "8RmZFUxos3E";

        dashRows.forEach(row => {
            const key = row[0] ? row[0].replace(/['"]/g, '').trim() : '';
            const val = row[1] ? row[1].replace(/['"]/g, '').trim() : '';
            if (key === "Status") status = val;
            if (key === "Nhạc Yt" || key === "Nhạc YT") ytId = extractYouTubeId(val);
        });

        const statusElem = document.getElementById('commission-status');
        if (statusElem) {
            statusElem.innerText = status;
            statusElem.style.color = (status === "OPEN") ? "#5C8042" : "#D64545";
        }

        document.getElementById('cc-status').value = status;
        document.getElementById('cc-yt').value = ytId;
        currentYTId = ytId;

        // Tải Setting Folder
        try {
            const setRes = await fetch(CSV_SETTING + '&t=' + new Date().getTime());
            const setText = await setRes.text();
            const setRows = setText.split('\n').map(row => row.split(','));
            const container = document.getElementById('drive-links-container');
            container.innerHTML = ''; 
            for (let i = 1; i < setRows.length; i++) {
                const type = setRows[i][0] ? setRows[i][0].replace(/['"]/g, '').trim() : '';
                const link = setRows[i][1] ? setRows[i][1].replace(/['"]/g, '').trim() : '';
                if (type !== '' || link !== '') addDriveInput(type, link);
            }
        } catch(e) { console.log("Lỗi lấy link folder"); }

        // Tải Database Hình ảnh
        const dbRes = await fetch(CSV_DATABASE + '&t=' + new Date().getTime());
        const dbText = await dbRes.text();
        const dbRows = dbText.split('\n').map(row => row.split(','));
        
        sampleData = {};
        for (let i = 1; i < dbRows.length; i++) {
            const type = dbRows[i][0] ? dbRows[i][0].replace(/['"]/g, '').trim() : '';
            let link = dbRows[i][1] ? dbRows[i][1].replace(/['"]/g, '').trim() : '';
            if (type && link && link.startsWith("http")) {
                link = getDirectImageUrl(link);
                if (!sampleData[type]) sampleData[type] = [];
                sampleData[type].push(link);
            }
        }
        renderCategoryCards();

        if (typeof YT !== 'undefined' && YT.Player) initYoutube(ytId);
        else window.onYouTubeIframeAPIReady = () => initYoutube(ytId);

    } catch (e) {
        catView.innerHTML = `<div>Lỗi kết nối dữ liệu.</div>`;
    }
}

function checkPassword() {
    const inputPass = document.getElementById('cc-pass').value.trim();
    const msg = document.getElementById('login-msg');
    
    if (md5(inputPass) === HASHED_PASS) {
        savedPass = inputPass;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        msg.innerText = "";
    } else {
        msg.innerText = "Ấy, chỗ này của Artist thôi nha :3";
        document.getElementById('cc-pass').value = "";
    }
}

async function updateToSheet() {
    const msg = document.getElementById('update-msg');
    msg.style.color = '#3E5F3E';
    msg.innerText = "Đang cập nhật... đợi xíu nhé!";
    
    const status = document.getElementById('cc-status').value;
    const rawYt = document.getElementById('cc-yt').value.trim();
    const finalYtId = extractYouTubeId(rawYt);
    
    let driveLinks = [];
    document.querySelectorAll('.drive-row').forEach(row => {
        const t = row.querySelector('.t-input').value.trim();
        const l = row.querySelector('.l-input').value.trim();
        if (t && l) driveLinks.push({type: t, url: l});
    });

    try {
        const res = await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Dùng no-cors nếu Apps Script không bật CORS
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                password: savedPass,
                status: status,
                ytId: finalYtId,
                driveLinks: driveLinks
            })
        });
        
        msg.style.color = '#5C8042';
        msg.innerText = "Lệnh đã gửi! Web sẽ cập nhật sau vài phút.";
        setTimeout(() => location.reload(), 3000);

    } catch (e) {
        msg.style.color = 'red';
        msg.innerText = "Lỗi kết nối!";
    }
}

function toggleFolder(type) {
    const top = document.getElementById('folder-top');
    const bottom = document.getElementById('folder-bottom');
    if (type === 'top') { 
        top.classList.toggle('open'); 
        bottom.classList.remove('open'); 
    } else { 
        bottom.classList.toggle('open'); 
        top.classList.remove('open'); 
    }
}

function extractYouTubeId(url) {
    if (!url) return '';
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : url; 
}

function addDriveInput(type = '', url = '') {
    const container = document.getElementById('drive-links-container');
    const div = document.createElement('div');
    div.className = 'drive-row';
    div.innerHTML = `<input type="text" class="t-input" placeholder="Loại" value="${type}">
                     <input type="text" class="l-input" placeholder="Link" value="${url}">
                     <button onclick="this.parentElement.remove()">X</button>`;
    container.appendChild(div);
}

function initYoutube(id) {
    document.getElementById('yt-cover').src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    if(ytPlayer) { ytPlayer.loadVideoById(id); return; }
    ytPlayer = new YT.Player('yt-hidden-player', {
        height: '0', width: '0', videoId: id,
        playerVars: { 'autoplay': 0, 'loop': 1, 'playlist': id },
        events: { 
            'onReady': onPlayerReady, // Bổ sung dòng này
            'onStateChange': onPlayerStateChange 
        }
    });
}

// Thêm hàm onPlayerReady này vào bên dưới hàm initYoutube
function onPlayerReady(event) {
    // Nếu web load chậm mà người dùng đã bấm OK rồi thì phát nhạc luôn
    if (okClicked) {
        event.target.playVideo();
    }
}

function onPlayerStateChange(event) {
    const playIcon = document.getElementById('play-pause-icon');
    const coverImg = document.getElementById('yt-cover');
    const titleDiv = document.getElementById('yt-title');
    
    if (event.data == YT.PlayerState.PLAYING) {
        ytInterval = setInterval(updateProgressBar, 1000);
        isPlaying = true;
        playIcon.classList.replace('fa-play', 'fa-pause');
        coverImg.style.animationPlayState = 'running';
        let videoData = ytPlayer.getVideoData();
        if(videoData && titleDiv) titleDiv.innerText = videoData.title;
    } else {
        clearInterval(ytInterval);
        isPlaying = false;
        playIcon.classList.replace('fa-pause', 'fa-play');
        coverImg.style.animationPlayState = 'paused';
    }
}

function updateProgressBar() {
    if (ytPlayer && ytPlayer.getDuration) {
        const percent = (ytPlayer.getCurrentTime() / ytPlayer.getDuration()) * 100;
        document.getElementById('yt-progress').style.width = percent + '%';
    }
}

function togglePlayPause() {
    if (!ytPlayer) return;
    isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
}

let isMuted = false;
function toggleMute() {
    if (!ytPlayer) return;
    const icon = document.getElementById('mute-icon');
    isMuted ? ytPlayer.unMute() : ytPlayer.mute();
    icon.className = isMuted ? "fas fa-volume-up" : "fas fa-volume-mute";
    isMuted = !isMuted;
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

const lightbox = document.getElementById('lightbox'), imgWrapper = document.getElementById('lightbox-wrapper'), img = document.getElementById('lightbox-img');
let scale = 1, panning = false, pointX = 0, pointY = 0, startX = 0, startY = 0;

function updateTransform() { img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`; }
function openLightbox(url) { img.src = url; scale = 1; pointX = 0; pointY = 0; updateTransform(); lightbox.classList.add('show'); }
function closeLightbox() { lightbox.classList.remove('show'); }

imgWrapper.onwheel = function (e) {
    e.preventDefault();
    let xs = (e.clientX - pointX) / scale, ys = (e.clientY - pointY) / scale;
    (e.deltaY < 0) ? (scale *= 1.2) : (scale /= 1.2);
    scale = Math.min(Math.max(0.5, scale), 5);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    updateTransform();
};
img.onmousedown = function (e) { e.preventDefault(); startX = e.clientX - pointX; startY = e.clientY - pointY; panning = true; };
window.onmouseup = () => { panning = false; };
window.onmousemove = (e) => {
    if (!panning) return;
    pointX = (e.clientX - startX); pointY = (e.clientY - startY);
    updateTransform();
};

window.addEventListener('DOMContentLoaded', init);