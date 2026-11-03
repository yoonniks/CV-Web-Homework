import { useState, useEffect } from 'react';

export default function ContactForm({ isOpen: externalIsOpen, onClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  const isOpen = externalIsOpen || internalIsOpen;

  useEffect(() => {
    const isClosed = sessionStorage.getItem('modalClosed');
    if (!isClosed) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    sessionStorage.setItem('modalClosed', 'true');
    setInternalIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xnppoygy';

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Дякуємо! Повідомлення успішно надіслано.');
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setStatus('Виникла помилка при відправці.');
      }
    } catch (error) {
      setStatus('Помилка мережі.');
    }
  };

  const inputClasses = "p-3 border border-[#ff66cc]/25 dark:border-white/15 rounded-lg bg-[#fffafd] dark:bg-[#090007] text-[#16000e] dark:text-[#fffeff] text-sm focus:outline-none focus:border-[#eb96cd] autofill:shadow-[0_0_0px_1000px_#fffafd_inset] dark:autofill:shadow-[0_0_0px_1000px_#090007_inset] dark:autofill:[-webkit-text-fill-color:#fffeff]";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#fffafd]/95 dark:bg-[#1b0014]/90 backdrop-blur-md text-[#16000e] dark:text-[#fffeff] p-7 rounded-xl border border-[#ff66cc]/25 dark:border-white/15 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-xl font-bold opacity-70 hover:opacity-100 transition cursor-pointer"
          type="button"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-4">Зворотний зв'язок</h3>

        {status ? (
          <p className="text-center py-4 font-semibold text-[#eb96cd]">{status}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold opacity-80">Ім'я</label>
              <input
                type="text"
                name="name"
                required
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold opacity-80">Email</label>
              <input
                type="email"
                name="email"
                required
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold opacity-80">Телефон</label>
              <input
                type="tel"
                name="phone"
                placeholder="+380..."
                required
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold opacity-80">Повідомлення</label>
              <textarea
                name="message"
                rows={3}
                required
                className={`${inputClasses} resize-y`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 py-3 bg-[#eb96cd] hover:bg-[#ed82c7] text-white font-bold rounded-lg transition active:scale-95 cursor-pointer"
            >
              Надіслати
            </button>
          </form>
        )}
      </div>
    </div>
  );
}