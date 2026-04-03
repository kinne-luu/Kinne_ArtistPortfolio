const SHEETS_CONFIG = {
    CSV_DASHBOARD : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ45beo4VhPjT6U5PhjyreKxARPel6bpg2vGqBkgOwOkCY0JgEkTCkwkZ1rDsFg5rR-1HJww5ztI71r/pub?gid=1776928980&single=true&output=csv',
    CSV_DATABASE  : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ45beo4VhPjT6U5PhjyreKxARPel6bpg2vGqBkgOwOkCY0JgEkTCkwkZ1rDsFg5rR-1HJww5ztI71r/pub?gid=204827592&single=true&output=csv',
    CSV_SETTING   : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ45beo4VhPjT6U5PhjyreKxARPel6bpg2vGqBkgOwOkCY0JgEkTCkwkZ1rDsFg5rR-1HJww5ztI71r/pub?gid=769885246&single=true&output=csv',
    WEB_APP_URL   : 'https://script.google.com/macros/s/AKfycbwoczs1Md1Z1T-yaADZL4r3MmZmSDSBzQG-CkchRFa8WHN6i9aXeXHy9RVTfg-TOKTK/exec',
}

const i18n = {
    vi: {
        "nav_home": "Home", "nav_tos": "TOS & Price", "nav_sample": "Sample",
        "comm_badge": "Commission:", "slot_badge": "Slot", "about_artist": "Artist",
        "notes_title": "*´ㅅ`)ﾞ Một số điều lưu ý của tui",
        "notes_p1": "<strong>Kị:</strong> Các ship côn trùng, anh em họ hàng, ko huyết thống kị tất. Kị switch, notp cũng tránh mình ra ạ.",
        "notes_p2": "<strong>Một số OTP, CP ruột của tui:</strong>",
        "notes_p3": "<strong>NOTP của tui:</strong> Là các otp trên switch bác nào đặt notp tui mà bị từ chối thì hiểu nha.",
        "tos_title": "Terms of Service (TOS)",
        "tos_l1": "<strong>Không nhận:</strong> NSFW, người già, trẻ con, phụ nữ mang thai, đàn ông mang bầu, quá cơ bắp,...",
        "tos_l2": "Đặt slot (wl) cọc 30% giá. Xin chuyển tiền từ 50%-100% sau khi chốt order (qua Zalo/Messenger). Vui lòng chuyển sau 12h kể từ khi yêu cầu được chấp nhận.",
        "tos_l3": "Không trả lại tiền đã nhận trong bất kỳ trường hợp nào, trừ khi vấn đề là do lỗi của tui.",
        "tos_l4": "Tui có quyền từ chối khi vượt quá khả năng. Tui có quyền đăng tải tranh và dùng làm sample trừ khi bạn có yêu cầu khác.",
        "tos_l5": "<strong>Phụ phí:</strong> Background (50k - 1tr), Detail (50k - 500k), Lấy vid quá trình (+50k).",
        "tos_l6": "<strong>Hệ số:</strong> Com design (x2 giá gốc), Com thương mại (x3 giá gốc).",
        "tos_l7": "Tối đa 1-2 nhân vật/bức (nếu vẽ máy). Chi phí dựa vào số lượng và chất lượng.",
        "tos_l8": "Được chỉnh sửa miễn phí 3 lần (từ lần 4 cộng thêm 10%-30%). Quá trình phác thảo sẽ gửi ảnh định dạng png, jpg.",
        "tos_l9": "<strong>Thời gian:</strong> Có thể lên đến 1 tháng (tranh máy) hoặc 1 tuần (tranh màu nước).",
        "price_title": "Price (Digital)",
        "report_warning": "Cậu hãy chắc chắn artist này vi phạm trước khi báo cáo nhé",
        "report_btn": "Báo cáo?", "loading": "Đợi xíu nhé, web đang load data...",
        "back_btn": '<i class="fa-solid fa-arrow-left"></i> Quay lại',
        "no_data": "Chưa có dữ liệu ảnh."
    },
    en: {
        "nav_home": "Home", "nav_tos": "TOS & Price", "nav_sample": "Sample",
        "comm_badge": "Commission:", "slot_badge": "Slot", "about_artist": "Artist",
        "notes_title": "*´ㅅ`)ﾞ My Notes & Guidelines",
        "notes_p1": "<strong>Dislikes:</strong> Insect ships, incest/pseudo-incest. Strictly no switches. If it's my NOTP, please respect my boundaries.",
        "notes_p2": "<strong>My ultimate OTPs / Favorite Ships:</strong>",
        "notes_p3": "<strong>My NOTPs:</strong> Reversals of the above OTPs. If your request gets declined, this might be why!",
        "tos_title": "Terms of Service (TOS)",
        "tos_l1": "<strong>Won't draw:</strong> NSFW, elderly, children, pregnancy, mpreg, hyper-muscular,...",
        "tos_l2": "Waitlist requires a 30% deposit. Please transfer 50%-100% after confirming the order. Payment is due within 12h of acceptance.",
        "tos_l3": "No refunds under any circumstances, unless the fault is on my end.",
        "tos_l4": "I reserve the right to decline requests beyond my capabilities. I may post the artwork and use it as samples unless requested otherwise.",
        "tos_l5": "<strong>Surcharges:</strong> Background (50k - 1M VND), Detail (50k - 500k VND), Speedpaint video (+50k VND).",
        "tos_l6": "<strong>Multipliers:</strong> Character Design (x2 base), Commercial Use (x3 base).",
        "tos_l7": "Max 1-2 characters/piece (digital). Cost depends on quantity and quality.",
        "tos_l8": "3 free revisions (4th onwards adds 10%-30%). Sketches will be sent in PNG/JPG format.",
        "tos_l9": "<strong>Turnaround time:</strong> Up to 1 month (digital) or 1 week (watercolor).",
        "price_title": "Price (Digital)",
        "report_warning": "Please ensure this artist has committed a violation before reporting.",
        "report_btn": "Report?", "loading": "Hold on, loading data...",
        "back_btn": '<i class="fa-solid fa-arrow-left"></i> Back',
        "no_data": "No image data found."
    }
};

let currentLang = 'vi';

function t(key) { return i18n[currentLang][key] || key; }

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang]?.[key]) el.innerHTML = i18n[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', e => changeLanguage(e.target.getAttribute('data-lang')));
    });

    const reportBtn = document.getElementById('report-btn');
    const reportModal = document.getElementById('report-modal');
    const closeReportBtn = document.querySelector('.close-report-btn');
    reportBtn.addEventListener('click', () => reportModal.classList.remove('hidden'));
    closeReportBtn.addEventListener('click', () => reportModal.classList.add('hidden'));

    const audio = document.getElementById('audio-stream');
    const playBtn = document.getElementById('play-pause-btn');
    const seekSlider = document.getElementById('seek-slider');
    const currentTime = document.getElementById('current-time');
    const durationTime = document.getElementById('duration-time');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => playBtn.classList.replace('fa-play', 'fa-pause')).catch(err => console.error(err));
        } else {
            audio.pause();
            playBtn.classList.replace('fa-pause', 'fa-play');
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
        const m = Math.floor(audio.currentTime / 60);
        const s = Math.floor(audio.currentTime % 60);
        currentTime.innerText = `${m}:${s < 10 ? '0' + s : s}`;
    });

    audio.addEventListener('loadedmetadata', () => {
        const m = Math.floor(audio.duration / 60);
        const s = Math.floor(audio.duration % 60);
        durationTime.innerText = `${m}:${s < 10 ? '0' + s : s}`;
    });

    seekSlider.addEventListener('input', () => {
        if (audio.duration) audio.currentTime = (seekSlider.value / 100) * audio.duration;
    });

    const navItems = document.querySelectorAll('.nav-item');
    const tabTrack = document.getElementById('tab-track');
    navItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            tabTrack.style.transform = `translateX(-${index * 100}%)`;
        });
    });

    const settingBtn = document.getElementById('setting-btn');
    const settingPanel = document.getElementById('setting-panel');
    const closeSettingBtn = document.getElementById('close-setting-btn');
    const authSection = document.getElementById('auth-section');
    const mainSettingSection = document.getElementById('main-setting-section');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const authPasswordInput = document.getElementById('auth-password-input');
    const authMsg = document.getElementById('auth-msg');

    let currentAuthPassword = "";

    settingBtn.addEventListener('click', () => {
        settingPanel.classList.add('show');
        if (currentAuthPassword) {
            authSection.style.display = 'none';
            mainSettingSection.style.display = 'flex';
        } else {
            authSection.style.display = 'flex';
            mainSettingSection.style.display = 'none';
            authPasswordInput.value = '';
            authMsg.innerText = '';
            setTimeout(() => authPasswordInput.focus(), 300);
        }
    });

    closeSettingBtn.addEventListener('click', () => settingPanel.classList.remove('show'));

    function checkPassword() {
        const pass = authPasswordInput.value.trim();
        if (pass === "170709") {
            currentAuthPassword = pass;
            authSection.style.display = 'none';
            mainSettingSection.style.display = 'flex';
            authMsg.innerText = '';
        } else {
            authMsg.innerText = "Ara, chỗ này của artist thôi đó nha";
        }
    }

    authSubmitBtn.addEventListener('click', checkPassword);
    authPasswordInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') { e.preventDefault(); checkPassword(); }
    });

    function addLinkRow(type = '', url = '') {
        const container = document.getElementById('drive-links-container');
        const row = document.createElement('div');
        row.className = 'drive-input-row';
        row.innerHTML = `
            <input type="text" placeholder="Type" class="dl-type" value="${type}">
            <input type="text" placeholder="Google Drive URL" class="dl-url" value="${url}">
            <button type="button" class="remove-link-btn" title="Xóa thư mục" style="background:none;border:none;color:#c44545;cursor:pointer;font-size:18px;font-weight:bold;padding:0 5px;">×</button>
        `;
        row.querySelector('.remove-link-btn').addEventListener('click', () => row.remove());
        container.appendChild(row);
    }

    document.getElementById('add-link-btn').addEventListener('click', () => addLinkRow());

    function updateSlotsUI(filled) {
        const total = 5;
        const container = document.getElementById('comm-slots-container');
        container.innerHTML = '';
        const currentStatus = document.getElementById('comm-status-text').innerText.toLowerCase();
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i < filled) {
                dot.classList.add('active', currentStatus === 'open' ? 'open' : 'closed');
            }
            container.appendChild(dot);
        }
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.addEventListener('mouseover', () => dot.setAttribute('title', `Slot ${i + 1}`));
        });
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeLbBtn = document.getElementById('close-lightbox-btn');
    let scale = 1, panning = false, pointX = 0, pointY = 0, startX = 0, startY = 0;

    function resetLightbox() {
        scale = 1; pointX = 0; pointY = 0;
        lightboxImg.style.transform = `translate(0px, 0px) scale(1)`;
    }

    closeLbBtn.addEventListener('click', () => { lightbox.classList.add('hidden'); resetLightbox(); });

    window.openLightbox = function(imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
        resetLightbox();
    };

    lightboxContent.addEventListener('wheel', e => {
        e.preventDefault();
        const oldScale = scale;
        scale = Math.min(Math.max(1, scale + e.deltaY * -0.002), 5);
        if (scale < oldScale) {
            pointX = scale === 1 ? 0 : pointX * (scale - 1) / (oldScale - 1);
            pointY = scale === 1 ? 0 : pointY * (scale - 1) / (oldScale - 1);
        }
        lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    });

    lightboxContent.addEventListener('mousedown', e => {
        e.preventDefault();
        startX = e.clientX - pointX; startY = e.clientY - pointY;
        panning = true;
    });
    lightboxContent.addEventListener('mousemove', e => {
        if (!panning || scale === 1) return;
        e.preventDefault();
        pointX = e.clientX - startX; pointY = e.clientY - startY;
        lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    });
    window.addEventListener('mouseup', () => panning = false);

    async function fetchCSV(url) {
        try {
            const res = await fetch(url + '&t=' + Date.now());
            const text = await res.text();
            return text.split('\n').map(row => row.split(','));
        } catch(e) { return []; }
    }

    function cleanCell(cell) { return cell ? cell.replace(/['"\r]/g, '').trim() : ''; }

    function toDirectDriveUrl(url) {
        if (!url) return '';
        let id = '';
        if (url.includes('drive.google.com/uc?export=view&id=')) id = url.split('id=')[1].split('&')[0];
        else if (url.includes('drive.google.com/file/d/')) id = url.split('/file/d/')[1].split('/')[0];
        return id ? `https://drive.google.com/uc?export=view&id=${id}` : url;
    }

    async function fetchSettings() {
        const rows = await fetchCSV(SHEETS_CONFIG.CSV_SETTING);
        const result = [];
        for (let i = 1; i < rows.length; i++) {
            if (!rows[i] || rows[i].length < 2) continue;
            const type = cleanCell(rows[i][0]);
            const link = cleanCell(rows[i][1]);
            if (type && link) result.push({ type, url: link });
        }
        return result;
    }

    async function fetchDatabase() {
        const rows = await fetchCSV(SHEETS_CONFIG.CSV_DATABASE);
        const result = {};
        for (let i = 1; i < rows.length; i++) {
            if (!rows[i] || rows[i].length < 2) continue;
            const type = cleanCell(rows[i][0]);
            let link = cleanCell(rows[i][1]);
            if (type && link && link.startsWith('http')) {
                link = toDirectDriveUrl(link);
                if (!result[type]) result[type] = [];
                result[type].push(link);
            }
        }
        return result;
    }

    async function pushToSheet(password, payload) {
        try {
            await fetch(SHEETS_CONFIG.WEB_APP_URL, {
                method  : 'POST',
                mode    : 'no-cors',
                headers : { 'Content-Type': 'application/json' },
                body    : JSON.stringify({ password, status: payload.status, slots: payload.slots, driveLinks: payload.driveLinks ?? [] }),
            });
            return { ok: true, message: 'Xong rùi, cậu đợi vài phút để web cập nhật nhé, nhớ reload lại trang' };
        } catch(e) { return { ok: false, message: 'Lỗi mạng.' }; }
    }

    function updateStatusUI(status) {
        const textEl = document.getElementById('comm-status-text');
        textEl.innerText = status;
        const isOpen = status.toLowerCase() === 'open';
        textEl.className = isOpen ? 'status-open' : 'status-closed';
        document.querySelectorAll('.comm-slots .dot.active').forEach(d => {
            d.classList.toggle('open', isOpen);
            d.classList.toggle('closed', !isOpen);
        });
        document.getElementById('set-status').value = status.charAt(0).toUpperCase() + status.slice(1);
    }

    let sampleDataCache = {};
    const sampleContainer = document.getElementById('sample-container');

    function renderImageGrid(links) {
        sampleContainer.innerHTML = '<div class="sample-grid"></div>';
        const grid = sampleContainer.querySelector('.sample-grid');
        links.forEach(link => {
            const img = document.createElement('img');
            img.className = 'sample-item';
            img.src = link;
            img.onclick = () => window.openLightbox(link);
            grid.appendChild(img);
        });
    }

    function renderFolders(data) {
        sampleContainer.innerHTML = '<div class="folder-grid"></div>';
        const grid = sampleContainer.querySelector('.folder-grid');
        Object.keys(data).forEach(type => {
            const folder = document.createElement('div');
            folder.className = 'folder-item';
            folder.innerHTML = `<i class="fa-solid fa-folder-open"></i><span>${type}</span>`;
            folder.onclick = () => {
                sampleContainer.innerHTML = `<button class="back-btn" data-i18n="back_btn">${t('back_btn')}</button>`;
                sampleContainer.querySelector('.back-btn').onclick = () => renderFolders(data);
                const subGrid = document.createElement('div');
                subGrid.className = 'sample-grid';
                sampleContainer.appendChild(subGrid);
                data[type].forEach(link => {
                    const img = document.createElement('img');
                    img.className = 'sample-item';
                    img.src = link;
                    img.onclick = () => window.openLightbox(link);
                    subGrid.appendChild(img);
                });
            };
            grid.appendChild(folder);
        });
    }

    async function loadInitialData() {
        try {
            const rows = await fetchCSV(SHEETS_CONFIG.CSV_DASHBOARD);
            let currentStatus = 'Closed';
            let fetchedSlots = 0;
            rows.forEach(r => {
                const key = cleanCell(r[0]);
                const val = cleanCell(r[1]);
                if (key === 'Status') currentStatus = val;
                if (key === 'Slot') fetchedSlots = parseInt(val) || 0;
            });
            updateStatusUI(currentStatus);
            document.getElementById('set-slots').value = fetchedSlots;
            updateSlotsUI(fetchedSlots);

            const settingsLinks = await fetchSettings();
            const linksContainer = document.getElementById('drive-links-container');
            linksContainer.innerHTML = '';
            settingsLinks.length > 0 ? settingsLinks.forEach(l => addLinkRow(l.type, l.url)) : addLinkRow();

            sampleDataCache = await fetchDatabase();
            const keys = Object.keys(sampleDataCache);
            if (keys.length === 0) {
                sampleContainer.innerHTML = `<div class="loading-text" data-i18n="no_data">${t('no_data')}</div>`;
            } else if (keys.length === 1) {
                renderImageGrid(sampleDataCache[keys[0]]);
            } else {
                renderFolders(sampleDataCache);
            }
        } catch(e) {
            sampleContainer.innerHTML = '<div class="loading-text">Chưa cấu hình Google Sheet Link.</div>';
        }
    }

    loadInitialData();

    document.getElementById('update-sheet-btn').addEventListener('click', async () => {
        const pass = currentAuthPassword;
        const status = document.getElementById('set-status').value;
        const msgEl = document.getElementById('setting-msg');
        const activeSlots = parseInt(document.getElementById('set-slots').value) || 0;

        updateStatusUI(status);
        updateSlotsUI(activeSlots);

        const driveLinks = [];
        document.querySelectorAll('.drive-input-row').forEach(row => {
            const type = row.querySelector('.dl-type').value;
            const url = row.querySelector('.dl-url').value;
            if (type && url) driveLinks.push({ type, url });
        });

        msgEl.style.color = "blue";
        msgEl.innerText = "Web đang update, đợi xíu nhé...";

        const result = await pushToSheet(pass, { status, slots: activeSlots, driveLinks });
        msgEl.style.color = result.ok ? "green" : "red";
        msgEl.innerText = result.message;

        if (result.ok) {
            setTimeout(() => { settingPanel.classList.remove('show'); msgEl.innerText = ""; }, 2000);
        }
    });
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        return false;
    }
});
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Ara, đừng copy của tớ mà :<');
});