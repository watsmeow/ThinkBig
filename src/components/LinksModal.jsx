import { useEffect } from "react";

export default function LinksModal({ open, title, links, onClose }) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="links-modal__overlay" onClick={onClose}>
      <div
        className="links-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="links-modal-title"
      >
        <div className="links-modal__header">
          <h3 id="links-modal-title">{title}</h3>
          <button
            type="button"
            className="links-modal__close"
            onClick={onClose}
            aria-label="Close popup"
          >
            ×
          </button>
        </div>

        <div className="links-modal__list">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="links-card"
              >
                <div className="links-card__left">
                  {Icon ? (
                    <Icon size={26} strokeWidth={2.3} />
                  ) : link.image ? (
                    <img src={link.image} alt="" className="links-card__image" />
                  ) : null}
                </div>

                <div className="links-card__content">{link.title}</div>

                <div className="links-card__right">→</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}