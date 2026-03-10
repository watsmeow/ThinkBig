import { useState } from "react";
import { links } from "../data/links";
import LinksModal from "./LinksModal";

export default function LinksHub() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section className="links-hub section" id="links">
      <div className="container links-hub__container">
        <div className="links-hub__header">

          <h2>@thinkbigbodybuilding</h2>
        </div>

        <div className="links-list">
          {links.map((link) => {
            const Icon = link.icon;
            const hasChildren = Array.isArray(link.children) && link.children.length > 0;

            if (hasChildren) {
              return (
                <button
                  key={link.title}
                  type="button"
                  className="links-card links-card--button"
                  onClick={() => setActiveGroup(link)}
                >
                  <div className="links-card__left">
                    {Icon ? (
                      <Icon size={28} strokeWidth={2.2} />
                    ) : link.image ? (
                      <img src={link.image} alt="" className="links-card__image" />
                    ) : null}
                  </div>

                  <div className="links-card__content">{link.title}</div>

                  <div className="links-card__right">→</div>
                </button>
              );
            }

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
                    <Icon size={28} strokeWidth={2.2} />
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

      <LinksModal
        open={!!activeGroup}
        title={activeGroup?.title}
        links={activeGroup?.children || []}
        onClose={() => setActiveGroup(null)}
      />
    </section>
  );
}