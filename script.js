// 1. Системна інформація
const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

const savedData = JSON.parse(localStorage.getItem('systemInfo'));

const footerContent = document.querySelector('.footer-content');

if (footerContent && savedData) {
    const infoParagraph = document.createElement('p');
    infoParagraph.className = 'system-info';
    infoParagraph.style.fontSize = '0.8rem';
    infoParagraph.style.marginTop = '0.5rem';
    infoParagraph.style.opacity = '0.75';
    
    infoParagraph.textContent = `ОС: ${savedData.platform} | Браузер: ${savedData.userAgent}`;
    footerContent.appendChild(infoParagraph);
}

// 2. Відображення коментарів з JSONPlaceholder
async function loadEmployerReviews() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/15/comments');
        const comments = await response.json();

        const mainContent = document.querySelector('.main-content');
        const contactSection = document.getElementById('contact');

        const reviewsSection = document.createElement('section');
        reviewsSection.id = 'reviews';

        const title = document.createElement('h2');
        title.className = 'title-projects';
        title.textContent = 'Employer Reviews';
        reviewsSection.appendChild(title);

        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        comments.forEach(comment => {
            const card = document.createElement('article');
            card.className = 'card';

            card.innerHTML = `
                <span class="card-badge">${comment.email}</span>
                <h3>${comment.name}</h3>
                <p>${comment.body}</p>
            `;
            gridContainer.appendChild(card);
        });

        reviewsSection.appendChild(gridContainer);

        if (mainContent && contactSection) {
            mainContent.insertBefore(reviewsSection, contactSection);
        } else if (mainContent) {
            mainContent.appendChild(reviewsSection);
        }
    } catch (error) {
        console.error('Помилка завантаження коментарів:', error);
    }
}

loadEmployerReviews();

// 3. Модальне вікно (прив'язане до пункту Contact та автовідкриття через 1 хв)
function initModalForm() {
    const formId = typeof FORMSPREE_ID !== 'undefined' ? FORMSPREE_ID : '';

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'feedback-modal';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(4px);
    `;

    const modalContainer = document.createElement('div');
    modalContainer.style.cssText = `
        background-color: var(--modal-bg);
        color: var(--text-color);
        padding: 2rem;
        border-radius: 12px;
        max-width: 450px;
        width: 90%;
        position: relative;
        box-shadow: 0 8px 20px var(--shadow-color);
        border: 1px solid var(--border-color);
    `;

    const inputStyle = `
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid var(--border-color, #ccc);
        background-color: var(--bg-color, #fff);
        color: var(--text-color, #000);
        font-family: inherit;
        font-size: 0.95rem;
        box-sizing: border-box;
    `;

    modalContainer.innerHTML = `
        <button id="close-modal-btn" style="
            position: absolute;
            top: 12px;
            right: 15px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-color, #000);
        ">&times;</button>
        <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">Зворотний зв'язок</h3>
        <form id="modal-form" action="https://formspree.io/f/${formId}" method="POST" style="display: flex; flex-direction: column; gap: 0.8rem;">
            <div>
                <label style="display:block; font-size: 0.85rem; margin-bottom: 0.3rem;">Ім'я</label>
                <input type="text" name="name" required style="${inputStyle}">
            </div>
            <div>
                <label style="display:block; font-size: 0.85rem; margin-bottom: 0.3rem;">Email</label>
                <input type="email" name="email" required style="${inputStyle}">
            </div>
            <div>
                <label style="display:block; font-size: 0.85rem; margin-bottom: 0.3rem;">Телефон</label>
                <input type="tel" name="phone" placeholder="+380..." required style="${inputStyle}">
            </div>
            <div>
                <label style="display:block; font-size: 0.85rem; margin-bottom: 0.3rem;">Повідомлення</label>
                <textarea name="message" rows="3" required style="${inputStyle} resize: vertical;"></textarea>
            </div>
            <button type="submit" id="submit-btn" style="
                margin-top: 0.5rem;
                padding: 0.8rem;
                background-color: var(--accent-color, #eb96cd);
                color: #fff;
                border: none;
                border-radius: 8px;
                font-weight: bold;
                font-size: 0.95rem;
                cursor: pointer;
            ">Надіслати</button>
        </form>
        <div id="form-status" style="display:none; margin-top: 1rem; text-align: center; color: var(--accent-color); font-weight: 600;"></div>
    `;

    modalOverlay.appendChild(modalContainer);
    document.body.appendChild(modalOverlay);

    function openModal(e) {
        if (e) e.preventDefault();
        modalOverlay.style.display = 'flex';
    }

    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    const contactNavAnchor = document.querySelector('.nav-links a[href="#contact"]');
    if (contactNavAnchor) {
        contactNavAnchor.addEventListener('click', openModal);
    }

    const openContactBtn = document.getElementById('open-contact-modal-btn');
    if (openContactBtn) {
        openContactBtn.addEventListener('click', openModal);
    }

    const isClosed = sessionStorage.getItem('modalClosed');
    if (!isClosed) {
        setTimeout(() => {
            openModal();
        }, 60000);
    }

    const closeBtn = modalContainer.querySelector('#close-modal-btn');
    closeBtn.addEventListener('click', () => {
        closeModal();
        sessionStorage.setItem('modalClosed', 'true');
    });

    const form = modalContainer.querySelector('#modal-form');
    const status = modalContainer.querySelector('#form-status');
    const submitBtn = modalContainer.querySelector('#submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Надсилання...';

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.style.display = 'none';
                status.style.display = 'block';
                status.textContent = 'Дякуємо! Повідомлення успішно надіслано.';
                setTimeout(() => {
                    closeModal();
                    sessionStorage.setItem('modalClosed', 'true');
                }, 2000);
            } else {
                status.style.display = 'block';
                status.style.color = 'red';
                status.textContent = 'Виникла помилка при відправці.';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Надіслати';
            }
        } catch (error) {
            status.style.display = 'block';
            status.style.color = 'red';
            status.textContent = 'Помилка мережі.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Надіслати';
        }
    });
}

initModalForm();

// 4. Перемикач теми
function initThemeSwitcher() {
    const now = new Date();
    const hours = now.getHours();
    const isDayTime = hours >= 7 && hours < 21;
    let currentTheme = isDayTime ? 'light' : 'dark';

    const navLinks = document.querySelector('.nav-links');
    let themeBtn = null;

    if (navLinks) {
        const li = document.createElement('li');
        themeBtn = document.createElement('button');
        themeBtn.type = 'button';
        themeBtn.title = 'Переключити тему';
        themeBtn.style.cssText = `
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-color);
            padding: 0.4rem 0.7rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s ease;
        `;

        themeBtn.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });

        li.appendChild(themeBtn);
        navLinks.appendChild(li);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme = theme;
        if (themeBtn) {
            themeBtn.innerHTML = theme === 'dark' 
                ? '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>' 
                : '<i class="fa-solid fa-moon" style="color: #eb96cd;"></i>';
        }
    }

    applyTheme(currentTheme);
}

initThemeSwitcher();